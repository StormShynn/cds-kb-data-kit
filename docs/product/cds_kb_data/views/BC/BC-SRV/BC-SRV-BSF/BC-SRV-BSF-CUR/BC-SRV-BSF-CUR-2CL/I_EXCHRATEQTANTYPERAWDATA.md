---
name: I_EXCHRATEQTANTYPERAWDATA
description: "Exchrateqtantyperawdata"
app_component: BC-SRV-BSF-CUR-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-BSF
  - interface-view
  - component:BC-SRV-BSF-CUR-2CL
  - lob:Basis Components
---
# I_EXCHRATEQTANTYPERAWDATA

**Exchrateqtantyperawdata**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BSF-CUR-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceCurrency` | ✓ | |  | `fcurr` | `CUKY(5)` | From-Currency |
| `TargetCurrency` | ✓ | |  | `tcurr` | `CUKY(5)` | To-Currency |
| `ValidityStartDate` | ✓ | |  | `case gdatu when '' then cast('00000000' as abap.dats) else cast(substring(cast(99999999 - cast(cast(gdatu as abap.numc(8)) as abap.int4) as abap.char(20)), 1, 8) as abap.dats) end` | `DATS(8)` |  |
| `CurrencyQuotationType` |  | |  | `notation` | `CHAR(1)` | Quotation type for currency translation |
| `_SourceCurrency` | | ✓ | | | | |
| `_TargetCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SourceCurrency` | `I_Currency` | [0..1] |
| `_TargetCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFICURRQUOTRAW'
@EndUserText.label: 'Exchange Rate Quotation Type'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@ClientHandling.type: #INHERITED 
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING 

@AbapCatalog.buffering.status: #ACTIVE        
@AbapCatalog.buffering.type: #FULL
//@AbapCatalog.buffering.numberOfKeyFields: 4
@Analytics.internalName: #LOCAL  

//@ObjectModel.representativeKey: ['ValidityStartDate']
@Analytics:{
//    dataCategory: #DIMENSION,
    dataExtraction: { enabled: true } }

define view I_ExchRateQtanTypeRawData as select from tcurn 
association [0..1] to I_Currency  as _SourceCurrency on $projection.SourceCurrency = _SourceCurrency.Currency
association [0..1] to I_Currency  as _TargetCurrency on $projection.TargetCurrency = _TargetCurrency.Currency
{
    //TCURN 
       @ObjectModel.foreignKey.association:'_SourceCurrency'
    key fcurr as SourceCurrency, 
       @ObjectModel.foreignKey.association:'_TargetCurrency'
    key tcurr as TargetCurrency, 
    //key cast ( gdatu as fis_datbi  ) as ValidityStartDate, 
    key case gdatu
    when '' then cast('00000000' as abap.dats) 
    else cast(substring(cast(99999999 - cast(cast(gdatu as abap.numc(8)) as abap.int4) as abap.char(20)), 1, 8) as abap.dats)  
    end as ValidityStartDate,     
    notation as CurrencyQuotationType,
    _SourceCurrency,
    _TargetCurrency   
}
```
