---
name: I_AGREEMENTCOSTTYPETEXT
description: "Agreement Cost Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTCOSTTYPETEXT')/$value
semantic_en: "Agreement Cost Type - Text"
semantic_vi: "Agreement Cost Type - Text — CDS view giao diện dựa trên tcms_cost_typ_t."
keywords:
  - "agreement"
  - "cost"
  - "type"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTCOSTTYPETEXT

**Agreement Cost Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTCOSTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementCostType` | ✓ | |  | `cost_typ` | `CHAR(6)` | Cost Type of the Pool Agreement |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `AgreementCostTypeText` |  | |  | `name` | `CHAR(40)` | Name of the Liquidation Mode |
| `_Language` | | ✓ | | | | |
| `_AgreementCostType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgreementCostType` | `I_AgreementCostType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTCOSTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTCOSTTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGCOSTTYPETXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'AgreementCostType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Cost Type - Text'
define view I_AgreementCostTypeText
  as select from tcms_cost_typ_t
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
  association [0..1] to I_AgreementCostType as _AgreementCostType on $projection.AgreementCostType = _AgreementCostType.AgreementCostType
{
      @ObjectModel.foreignKey.association: '_AgreementCostType'
  key cost_typ as AgreementCostType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      name     as AgreementCostTypeText,

      _Language,
      _AgreementCostType
}
```
