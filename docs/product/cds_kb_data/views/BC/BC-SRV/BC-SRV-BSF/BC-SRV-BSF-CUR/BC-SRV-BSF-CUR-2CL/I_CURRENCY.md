---
name: I_CURRENCY
description: "Currency"
app_component: BC-SRV-BSF-CUR-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-BSF
  - interface-view
  - currency
  - component:BC-SRV-BSF-CUR-2CL
  - lob:Basis Components
---
# I_CURRENCY

**Currency**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BSF-CUR-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Currency` | ✓ | |  | `waers` | `CUKY(5)` | Currency Key |
| `Decimals` |  | |  | `cast(COALESCE(tcurx.currdec, 2) as currdec_cds)` | `INT1(3)` | Number of decimal places |
| `CurrencyISOCode` |  | |  | `cast(tcurc.isocd as isocd_cds)` | `CHAR(3)` | ISO Currency Code |
| `AlternativeCurrencyKey` |  | |  | `cast(tcurc.altwr as altwr_cds)` | `CHAR(3)` | Alternative Key |
| `IsPrimaryCurrencyForISOCrcy` |  | |  | `xprimary` | `CHAR(1)` | Primary SAP Currency Code for ISO Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CurrencyText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Currency'
@ObjectModel.representativeKey: 'Currency'
@ObjectModel.sapObjectNodeType.name: 'Currency' 
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC 
@AbapCatalog.sqlViewName: 'IFICURRENCY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true

define view I_Currency 
  as select from tcurc
  left outer join tcurx on tcurc.waers = tcurx.currkey
  
  association [0..*] to I_CurrencyText as _Text 
    on $projection.Currency = _Text.Currency
{
    
    @Semantics.currencyCode: true
    @ObjectModel.text.association: '_Text' 
    key tcurc.waers as Currency,
    _Text,
    
    cast(COALESCE(tcurx.currdec, 2) as currdec_cds) as Decimals,
           
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    @Search.fuzzinessThreshold: 0.8
    cast(tcurc.isocd  as isocd_cds) as CurrencyISOCode,
    cast(tcurc.altwr  as altwr_cds) as AlternativeCurrencyKey,
    tcurc.xprimary    as IsPrimaryCurrencyForISOCrcy
       
};
```
