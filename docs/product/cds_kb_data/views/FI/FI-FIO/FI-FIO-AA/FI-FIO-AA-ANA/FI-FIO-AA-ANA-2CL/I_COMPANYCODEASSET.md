---
name: I_COMPANYCODEASSET
description: "This CDS view provides the prerequisites for answering the following business question: How many company codes are defined that can be used in asset accounting?"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYCODEASSET')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many company codes are defined that can be used in asset accounting?"
semantic_vi: "Company Code in Asset Accounting — CDS view giao diện dựa trên faat_cmp."
keywords:
  - "company"
  - "code"
  - "asset"
  - "accounting"
  - "chart"
  - "depreciation"
  - "name"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
---
# I_COMPANYCODEASSET

**This CDS view provides the prerequisites for answering the following business question: How many company codes are defined that can be used in asset accounting?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYCODEASSET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `comp_code` | `CHAR(4)` | Company Code |
| `ChartOfDepreciation` |  | |  | `cast('' as afapl)` | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `_CompanyCode` | | ✓ | | | | |
| `_ChartOfDepreciation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_ChartOfDepreciation` | `I_ChartOfDepreciation` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYCODEASSET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYCODEASSET')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'ICOMPCODEASSET', preserveKey: true}
@EndUserText.label: 'Company Code in Asset Accounting'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #NONE,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_CompanyCodeAsset
  as select from faat_cmp

  association [1]    to I_CompanyCode         as _CompanyCode         on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ChartOfDepreciation as _ChartOfDepreciation on $projection.ChartOfDepreciation = _ChartOfDepreciation.ChartOfDepreciation
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.text.element: 'CompanyCodeName'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key comp_code as CompanyCode,

      @ObjectModel.foreignKey.association: '_ChartOfDepreciation'
      @VDM.lifecycle: {status: #DEPRECATED}
      cast('' as afapl) as ChartOfDepreciation, // !!! Do not use any longer !!! (Only supported in OP when business function FAA_CONFIG_REDESIGN_1 is not active (Like asset master worklist))

      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      _CompanyCode.CompanyCodeName,

      //* Asscociations *//
      _CompanyCode,
      _ChartOfDepreciation
}
```
