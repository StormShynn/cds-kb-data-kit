---
name: I_FSCLPERDWTHOUTFSCLYRFORVAR
description: "Fiscal Periods For Fiscal Year Variant Without Fiscal Year"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLPERDWTHOUTFSCLYRFORVAR')/$value
semantic_en: "Fiscal Periods For Fiscal Year Variant Without Fiscal Year"
semantic_vi: "Fiscal Periods For Fiscal Year Variant Without Fiscal Year — CDS view giao diện dựa trên I_FiscalYearPeriodForVariant."
keywords:
  - "fiscal"
  - "periods"
  - "for"
  - "year"
  - "variant"
  - "without"
  - "period"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-2CL
  - interface-view
  - lob:finance
---
# I_FSCLPERDWTHOUTFSCLYRFORVAR

**Fiscal Periods For Fiscal Year Variant Without Fiscal Year**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLPERDWTHOUTFSCLYRFORVAR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` | ✓ | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Fiscal Period |
| `_FiscalPeriodText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalPeriodText` | `I_CurrentYearFiscalPeriodText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLPERDWTHOUTFSCLYRFORVAR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLPERDWTHOUTFSCLYRFORVAR')/$value)*

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Periods For Fiscal Year Variant Without Fiscal Year'
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalPeriod'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFSCLPERDWOFY'

@Analytics.internalName: #LOCAL

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
define view entity I_FsclPerdWthoutFsclYrForVar as select from I_FiscalYearPeriodForVariant as I_FiscalYearPeriodForVariant

association [0..*] to I_CurrentYearFiscalPeriodText as _FiscalPeriodText     on  $projection.FiscalYearVariant    = _FiscalPeriodText.FiscalYearVariant
                                                                             and $projection.FiscalPeriod         = _FiscalPeriodText.FiscalPeriod               
{
 
@ObjectModel.foreignKey.association: '_FiscalYearVariant'  
//@Semantics.fiscal.yearVariant: true    
key I_FiscalYearPeriodForVariant.FiscalYearVariant,

@ObjectModel.text.association: '_FiscalPeriodText'
key I_FiscalYearPeriodForVariant.FiscalPeriod,

    I_FiscalYearPeriodForVariant._FiscalYearVariant, 
    _FiscalPeriodText                                                                
           
} where I_FiscalYearPeriodForVariant.IsSpecialPeriod <> 'X'
  group by I_FiscalYearPeriodForVariant.FiscalYearVariant, I_FiscalYearPeriodForVariant.FiscalPeriod
```
