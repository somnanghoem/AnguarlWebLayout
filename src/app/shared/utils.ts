import { environment } from 'src/environments/environment';

export class Util {

    public setSecureStorage( sKey: string, oValue: any ){

        oValue = this.stringjson(oValue);

        window.localStorage.setItem(sKey, oValue);

    }

    public getSecureStorage( sKey: string ): any {

        let data = window.localStorage.getItem(sKey);

        data = this.parsejson(data);

        return data;

	}
	public removeSecureStorage(sKey: string) {

		window.localStorage.removeItem(sKey);
	}

  private stringjson(vValue: any ) {

        let value =  vValue!=undefined && vValue!=null ? JSON.stringify(vValue) : "";
        return value;

  }

    private parsejson (vValue: any) {

        let retValue;

        if ( vValue != undefined && vValue.slice(0, 1) != "0" && vValue != "" ) {
            retValue = JSON.parse(vValue);
        }else{
            retValue = vValue;
        }

        return retValue;

    }

  /*   public numberFormat(value: any, options: object)	{

			let defaultOptions = {
                "toNumber_digits" : undefined,
			    "toNumber_default" : 0
            };

			for(var key in options)
			{
				if(options.hasOwnProperty(key)) defaultOptions["toNumber_" + key] = options[key];
            }

			let defaultNum = defaultOptions["toNumber_default"];

			if(value == undefined || value == "") return defaultNum;
			if(value.constructor!=String && value.constructor!=Number) console.log("type error. value type : " + value.constructor);

			let num;
			switch(value.constructor)
			{
				case Number :
					num = value;
					break;
				case String :
					var sign="";
					var decimal="";
					var numSplit = value.split(".");
					if(numSplit.length == 2)
					{
						num = numSplit[0];
						decimal = numSplit[1];
					}
					else num = value;

					if(num.length>1)
					{
						sign = num.substring(0,1);
						if(sign!="-" && sign!="+") sign="";
						else num=num.substring(1,num.length);
					}

					num = num.replace(/[^0-9]/gi, "");
					if(decimal == undefined) decimal = "";
					decimal = decimal.replace(/[^0-9]/gi, "");

					if(decimal!="") num = [num, decimal].join(".");
					num = Number(sign+num);
					break;
				default :
					return defaultNum;
			}
      environment.production ? (() => '')() : console.log(defaultOptions);
      environment.production ? (() => '')() : console.log("num" + num);

			for(var key in defaultOptions)
			{
				if(defaultOptions.hasOwnProperty(key))
				{
					switch(key)
					{
					case "toNumber_digits" :
						var digits = defaultOptions[key];

						if (digits >= 0) num = parseFloat(num.toFixed(digits)); // 소수부 반올림
						else
						{
							var fixdigits = Math.pow(10, Math.abs(digits));
							digits = Math.pow(10, digits); // 정수부 반올림
							num = Number(Math.round(num * digits).toFixed(0))*fixdigits;
						}
						break;
					}
				}
			}
			return num;
		} */

	/* 	public toNumber(value: any ,options?: object) {

			let defaultOptions = {
                "toNumber_digits" : undefined,
			    "toNumber_default" : 0
            };

			for(var key in options)
			{
				if(options.hasOwnProperty(key)) defaultOptions["toNumber_" + key] = options[key];
            }

			let defaultNum = defaultOptions["toNumber_default"];

			if(value == undefined || value == "") return defaultNum;
			if(value.constructor!=String && value.constructor!=Number) console.log("bizMOBNumber - type error. value type : " + value.constructor);

			let num;
			switch(value.constructor)
			{
				case Number :
					num = value;
					break;
				case String :
					var sign="";
					var decimal="";
					var numSplit = value.split(".");
					if(numSplit.length == 2)
					{
						num = numSplit[0];
						decimal = numSplit[1];
					}
					else num = value;

					if(num.length>1)
					{
						sign = num.substring(0,1);
						if(sign!="-" && sign!="+") sign="";
						else num=num.substring(1,num.length);
					}

					num = num.replace(/[^0-9]/gi, "");
					if(decimal == undefined) decimal = "";
					decimal = decimal.replace(/[^0-9]/gi, "");

					if(decimal!="") num = [num, decimal].join(".");
					num = Number(sign+num);
					break;
				default :
					return defaultNum;
			}

			for(key in options)
			{
				if(options.hasOwnProperty(key))
				{
					switch(key)
					{
					case "toNumber_digits" :
						var digits = options[key];

						if (digits >= 0) num = parseFloat(num.toFixed(digits)); // 소수부 반올림
						else
						{
							var fixdigits = Math.pow(10, Math.abs(digits));
							digits = Math.pow(10, digits); // 정수부 반올림
							num = Number(Math.round(num * digits).toFixed(0))*fixdigits;
						}
						break;
					}
				}
			}
			return num;
		} */
}
