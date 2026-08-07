---
name: I_PRJMARGANLYSRPTCRCYFLD
description: Prjmarganlysrptcrcyfld
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - interface-view
  - component:CO-FIO-PA-2CL
  - lob:Controlling
---
# I_PRJMARGANLYSRPTCRCYFLD

**Prjmarganlysrptcrcyfld**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyField` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PrjMargAnlysRptCrcyFldTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Currency Field of Project Margin Report'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType:{ serviceQuality: #A,
                            sizeCategory: #S,
                            dataClass: #CUSTOMIZING },
                representativeKey: 'CurrencyField',
                supportedCapabilities: [    #ANALYTICAL_DIMENSION, 
                                            #CDS_MODELING_ASSOCIATION_TARGET, 
                                            #SQL_DATA_SOURCE, 
                                            #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION } 
                
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION }

//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.internalName:#LOCAL

define view entity I_PrjMargAnlysRptCrcyFld as select from P_PrjMargAnlysRptCrcyFld

association [0..*] to I_PrjMargAnlysRptCrcyFldTxt as _Text on $projection.CurrencyField = _Text.CurrencyField
{
@ObjectModel.text.association: '_Text'
    key CurrencyField,
    _Text
}
```
