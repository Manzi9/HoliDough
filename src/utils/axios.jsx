import { useDispatch, useSelector } from "react-redux";
import { setCurrencyApiData } from "../redux/counterSlice";
import axios from "axios";
export const getCurrencyData = async (base) => {
  // const base = "GBP";
  const key = "zbc6sv4OIbZjw6Dm08f7vBbnb05C6J3d";
  const dispatch = useDispatch();
  const data = {
    meta: {
      code: 200,
      disclaimer: "Usage subject to terms: https://currencybeacon.com/terms",
    },
    response: {
      date: "2024-06-29T12:25:33Z",
      base: "GBP",
      rates: {
        ADA: 3.08349717,
        AED: 4.6447099,
        AFN: 89.86473011,
        ALL: 118.51470263,
        AMD: 489.33988682,
        ANG: 2.26045292,
        AOA: 1079.81891489,
        ARS: 1151.76995933,
        ATS: 16.24299687,
        AUD: 1.8940124,
        AWG: 2.26386133,
        AZM: 10750.18569083,
        AZN: 2.15003714,
        BAM: 2.30870988,
        BBD: 2.529454,
        BCH: 0.00329908,
        BDT: 148.68927764,
        BEF: 47.61821105,
        BGN: 2.30870988,
        BHD: 0.47553735,
        BIF: 3636.08544587,
        BMD: 1.264727,
        BND: 1.71518889,
        BOB: 8.75834664,
        BRL: 7.07038052,
        BSD: 1.264727,
        BTC: 0.00002072,
        BTN: 105.43439658,
        BWP: 17.16023157,
        BYN: 4.14198101,
        BYR: 41419.81011398,
        BZD: 2.55328092,
        CAD: 1.73086534,
        CDF: 3600.48828498,
        CHF: 1.13791232,
        CLF: 0.03168141,
        CLP: 1192.9234733,
        CNH: 9.23072699,
        CNY: 9.19117683,
        COP: 5246.59525258,
        CRC: 667.06032466,
        CUC: 1.264727,
        CUP: 30.30832771,
        CVE: 130.16542263,
        CYP: 0.69087184,
        CZK: 29.5488902,
        DEM: 2.30870988,
        DJF: 225.60534807,
        DKK: 8.80448939,
        DOGE: 10.01653177,
        DOP: 74.64181278,
        DOT: 0.20666319,
        DZD: 170.56166336,
        EEK: 18.46967904,
        EGP: 60.72196717,
        ERN: 18.97090498,
        ESP: 196.40613049,
        ETB: 73.02283418,
        ETH: 0.0003725,
        EUR: 1.18042462,
        FIM: 7.01848606,
        FJD: 2.82988595,
        FKP: 1,
        FRF: 7.74307791,
        GBP: 1,
        GEL: 3.55403758,
        GGP: 1,
        GHC: 192252.40739186,
        GHS: 19.22524074,
        GIP: 1,
        GMD: 85.69036449,
        GNF: 10852.78372233,
        GRD: 402.22968858,
        GTQ: 9.82563536,
        GYD: 264.2249408,
        HKD: 9.87558536,
        HNL: 31.30367203,
        HRK: 8.89390928,
        HTG: 169.31750013,
        HUF: 466.31765966,
        IDR: 20710.10698588,
        IEP: 0.92965993,
        ILS: 4.76478536,
        IMP: 1,
        INR: 105.43439658,
        IQD: 1656.75865073,
        IRR: 53225.7483008,
        ISK: 175.75498314,
        ITL: 2285.62077508,
        JEP: 1,
        JMD: 196.98442984,
        JOD: 0.89669144,
        JPY: 203.47629849,
        KES: 163.26990497,
        KGS: 109.3298364,
        KHR: 5197.84859508,
        KMF: 580.73084336,
        KPW: 1138.25429903,
        KRW: 1748.18953423,
        KWD: 0.38869219,
        KYD: 1.03708401,
        KZT: 598.74945754,
        LAK: 27963.46017311,
        LBP: 113966.14942783,
        LINK: 0.09130436,
        LKR: 387.0313614,
        LRD: 245.96848973,
        LSL: 22.93593586,
        LTC: 0.01699793,
        LTL: 4.07577012,
        LUF: 47.61821105,
        LUNA: 3.52720254,
        LVL: 0.82960242,
        LYD: 6.16244787,
        MAD: 12.58574061,
        MDL: 22.6090651,
        MGA: 5663.04106927,
        MGF: 28315.20534633,
        MKD: 72.6908909,
        MMK: 2651.98031041,
        MNT: 4282.6179871,
        MOP: 10.17185292,
        MRO: 501.54929072,
        MRU: 50.15492907,
        MTL: 0.50675629,
        MUR: 59.60282336,
        MVR: 19.30907968,
        MWK: 2190.27694557,
        MXN: 23.18667015,
        MXV: 2.84968927,
        MYR: 5.96639392,
        MZM: 80510.06849201,
        MZN: 80.51006849,
        NAD: 22.93593586,
        NGN: 1902.2519566,
        NIO: 46.45700144,
        NLG: 2.60131353,
        NOK: 13.48293548,
        NPR: 168.77411032,
        NZD: 2.07768982,
        OMR: 0.48695504,
        PAB: 1.264727,
        PEN: 4.84080594,
        PGK: 4.86338689,
        PHP: 73.93266428,
        PKR: 351.99124992,
        PLN: 5.0899828,
        PTE: 236.65388826,
        PYG: 9557.45898968,
        QAR: 4.60360627,
        ROL: 58748.71545395,
        RON: 5.87487155,
        RSD: 138.22371191,
        RUB: 108.41284283,
        RWF: 1662.06883014,
        SAR: 4.74272624,
        SBD: 10.40927336,
        SCR: 18.29019626,
        SDD: 75894.08733884,
        SDG: 758.94087339,
        SEK: 13.41005535,
        SGD: 1.71518889,
        SHP: 1,
        SIT: 282.87695546,
        SKK: 35.56147204,
        SLE: 28.46254348,
        SLL: 28462.54347687,
        SOS: 722.06025444,
        SPL: 0.21078783,
        SRD: 39.42792654,
        SRG: 39427.92653913,
        STD: 28961.50405187,
        STN: 28.96150405,
        SVC: 11.06636124,
        SYP: 16434.18655914,
        SZL: 22.93593586,
        THB: 46.52771581,
        TJS: 13.50015213,
        TMM: 22150.75629113,
        TMT: 4.43015126,
        TND: 3.97566043,
        TOP: 2.954939,
        TRL: 41334367.1390626,
        TRY: 41.33436714,
        TTD: 8.5978958,
        TVD: 1.8940124,
        TWD: 41.15213732,
        TZS: 3341.86196999,
        UAH: 51.3625825,
        UGX: 4706.00731918,
        UNI: 0.14146164,
        USD: 1.264727,
        UYU: 49.97283224,
        UZS: 15882.02408037,
        VAL: 2285.62077508,
        VEB: 4603949595.73072,
        VED: 46.03963903,
        VEF: 4603963.90274217,
        VES: 46.03963903,
        VND: 32184.5458749,
        VUV: 150.31249737,
        WST: 3.45459798,
        XAF: 774.30779114,
        XAG: 0.0433943,
        XAU: 0.0005437,
        XBT: 0.00002072,
        XCD: 3.4167069,
        XDR: 0.96152094,
        XLM: 13.90894231,
        XOF: 774.30779114,
        XPD: 0.00131742,
        XPF: 140.86212625,
        XPT: 0.0014095,
        XRP: 2.65747694,
        YER: 316.5605112,
        ZAR: 22.93593586,
        ZMK: 31145.88587992,
        ZMW: 31.14588588,
        ZWD: 457.70470074,
        ZWL: 17.28725488,
      },
    },
    date: "2024-06-29T12:25:33Z",
    base: "GBP",
    rates: {
      ADA: 3.08349717,
      AED: 4.6447099,
      AFN: 89.86473011,
      ALL: 118.51470263,
      AMD: 489.33988682,
      ANG: 2.26045292,
      AOA: 1079.81891489,
      ARS: 1151.76995933,
      ATS: 16.24299687,
      AUD: 1.8940124,
      AWG: 2.26386133,
      AZM: 10750.18569083,
      AZN: 2.15003714,
      BAM: 2.30870988,
      BBD: 2.529454,
      BCH: 0.00329908,
      BDT: 148.68927764,
      BEF: 47.61821105,
      BGN: 2.30870988,
      BHD: 0.47553735,
      BIF: 3636.08544587,
      BMD: 1.264727,
      BND: 1.71518889,
      BOB: 8.75834664,
      BRL: 7.07038052,
      BSD: 1.264727,
      BTC: 0.00002072,
      BTN: 105.43439658,
      BWP: 17.16023157,
      BYN: 4.14198101,
      BYR: 41419.81011398,
      BZD: 2.55328092,
      CAD: 1.73086534,
      CDF: 3600.48828498,
      CHF: 1.13791232,
      CLF: 0.03168141,
      CLP: 1192.9234733,
      CNH: 9.23072699,
      CNY: 9.19117683,
      COP: 5246.59525258,
      CRC: 667.06032466,
      CUC: 1.264727,
      CUP: 30.30832771,
      CVE: 130.16542263,
      CYP: 0.69087184,
      CZK: 29.5488902,
      DEM: 2.30870988,
      DJF: 225.60534807,
      DKK: 8.80448939,
      DOGE: 10.01653177,
      DOP: 74.64181278,
      DOT: 0.20666319,
      DZD: 170.56166336,
      EEK: 18.46967904,
      EGP: 60.72196717,
      ERN: 18.97090498,
      ESP: 196.40613049,
      ETB: 73.02283418,
      ETH: 0.0003725,
      EUR: 1.18042462,
      FIM: 7.01848606,
      FJD: 2.82988595,
      FKP: 1,
      FRF: 7.74307791,
      GBP: 1,
      GEL: 3.55403758,
      GGP: 1,
      GHC: 192252.40739186,
      GHS: 19.22524074,
      GIP: 1,
      GMD: 85.69036449,
      GNF: 10852.78372233,
      GRD: 402.22968858,
      GTQ: 9.82563536,
      GYD: 264.2249408,
      HKD: 9.87558536,
      HNL: 31.30367203,
      HRK: 8.89390928,
      HTG: 169.31750013,
      HUF: 466.31765966,
      IDR: 20710.10698588,
      IEP: 0.92965993,
      ILS: 4.76478536,
      IMP: 1,
      INR: 105.43439658,
      IQD: 1656.75865073,
      IRR: 53225.7483008,
      ISK: 175.75498314,
      ITL: 2285.62077508,
      JEP: 1,
      JMD: 196.98442984,
      JOD: 0.89669144,
      JPY: 203.47629849,
      KES: 163.26990497,
      KGS: 109.3298364,
      KHR: 5197.84859508,
      KMF: 580.73084336,
      KPW: 1138.25429903,
      KRW: 1748.18953423,
      KWD: 0.38869219,
      KYD: 1.03708401,
      KZT: 598.74945754,
      LAK: 27963.46017311,
      LBP: 113966.14942783,
      LINK: 0.09130436,
      LKR: 387.0313614,
      LRD: 245.96848973,
      LSL: 22.93593586,
      LTC: 0.01699793,
      LTL: 4.07577012,
      LUF: 47.61821105,
      LUNA: 3.52720254,
      LVL: 0.82960242,
      LYD: 6.16244787,
      MAD: 12.58574061,
      MDL: 22.6090651,
      MGA: 5663.04106927,
      MGF: 28315.20534633,
      MKD: 72.6908909,
      MMK: 2651.98031041,
      MNT: 4282.6179871,
      MOP: 10.17185292,
      MRO: 501.54929072,
      MRU: 50.15492907,
      MTL: 0.50675629,
      MUR: 59.60282336,
      MVR: 19.30907968,
      MWK: 2190.27694557,
      MXN: 23.18667015,
      MXV: 2.84968927,
      MYR: 5.96639392,
      MZM: 80510.06849201,
      MZN: 80.51006849,
      NAD: 22.93593586,
      NGN: 1902.2519566,
      NIO: 46.45700144,
      NLG: 2.60131353,
      NOK: 13.48293548,
      NPR: 168.77411032,
      NZD: 2.07768982,
      OMR: 0.48695504,
      PAB: 1.264727,
      PEN: 4.84080594,
      PGK: 4.86338689,
      PHP: 73.93266428,
      PKR: 351.99124992,
      PLN: 5.0899828,
      PTE: 236.65388826,
      PYG: 9557.45898968,
      QAR: 4.60360627,
      ROL: 58748.71545395,
      RON: 5.87487155,
      RSD: 138.22371191,
      RUB: 108.41284283,
      RWF: 1662.06883014,
      SAR: 4.74272624,
      SBD: 10.40927336,
      SCR: 18.29019626,
      SDD: 75894.08733884,
      SDG: 758.94087339,
      SEK: 13.41005535,
      SGD: 1.71518889,
      SHP: 1,
      SIT: 282.87695546,
      SKK: 35.56147204,
      SLE: 28.46254348,
      SLL: 28462.54347687,
      SOS: 722.06025444,
      SPL: 0.21078783,
      SRD: 39.42792654,
      SRG: 39427.92653913,
      STD: 28961.50405187,
      STN: 28.96150405,
      SVC: 11.06636124,
      SYP: 16434.18655914,
      SZL: 22.93593586,
      THB: 46.52771581,
      TJS: 13.50015213,
      TMM: 22150.75629113,
      TMT: 4.43015126,
      TND: 3.97566043,
      TOP: 2.954939,
      TRL: 41334367.1390626,
      TRY: 41.33436714,
      TTD: 8.5978958,
      TVD: 1.8940124,
      TWD: 41.15213732,
      TZS: 3341.86196999,
      UAH: 51.3625825,
      UGX: 4706.00731918,
      UNI: 0.14146164,
      USD: 1.264727,
      UYU: 49.97283224,
      UZS: 15882.02408037,
      VAL: 2285.62077508,
      VEB: 4603949595.73072,
      VED: 46.03963903,
      VEF: 4603963.90274217,
      VES: 46.03963903,
      VND: 32184.5458749,
      VUV: 150.31249737,
      WST: 3.45459798,
      XAF: 774.30779114,
      XAG: 0.0433943,
      XAU: 0.0005437,
      XBT: 0.00002072,
      XCD: 3.4167069,
      XDR: 0.96152094,
      XLM: 13.90894231,
      XOF: 774.30779114,
      XPD: 0.00131742,
      XPF: 140.86212625,
      XPT: 0.0014095,
      XRP: 2.65747694,
      YER: 316.5605112,
      ZAR: 22.93593586,
      ZMK: 31145.88587992,
      ZMW: 31.14588588,
      ZWD: 457.70470074,
      ZWL: 17.28725488,
    },
  };
  // const { data } = await axios.get(
  //   `https://api.currencybeacon.com/v1/latest?api_key=${key}&base=${base}`
  // );

  console.log(data.rates);

  dispatch(setCurrencyApiData(data.rates));
};
