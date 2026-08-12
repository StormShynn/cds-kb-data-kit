---
name: I_PRODSRVCMARGREPCRCYFLD
description: "Currency field for Prod and Srvc Report"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSRVCMARGREPCRCYFLD')/$value
semantic_en: "Currency field for Prod and Srvc Report"
semantic_vi: "Currency field for Prod and Srvc Report — CDS view giao diện dựa trên P_ProdSrvcMargRepCrcyFld."
keywords:
  - "currency"
  - "field"
  - "for"
  - "prod"
  - "and"
  - "srvc"
  - "report"
tags:
  - CO
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
---
# I_PRODSRVCMARGREPCRCYFLD

**Currency field for Prod and Srvc Report**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSRVCMARGREPCRCYFLD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyField` | ✓ | |  |  | `CHAR(4)` | Currency Role Field |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PrjMargAnlysRptCrcyFldTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSRVCMARGREPCRCYFLD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSRVCMARGREPCRCYFLD')/$value)*

```abap
@EndUserText.label: 'Currency field for Prod and Srvc Report'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
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
define view entity I_ProdSrvcMargRepCrcyFld as select from P_ProdSrvcMargRepCrcyFld

association [0..*] to I_PrjMargAnlysRptCrcyFldTxt as _Text on $projection.CurrencyField = _Text.CurrencyField
{
@ObjectModel.text.association: '_Text'
    key CurrencyField,
    _Text
}
```
