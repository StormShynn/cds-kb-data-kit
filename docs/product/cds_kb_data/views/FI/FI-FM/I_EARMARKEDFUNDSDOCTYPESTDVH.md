---
name: I_EARMARKEDFUNDSDOCTYPESTDVH
description: "Earmarked Funds Document Type Standard"
app_component: FI-FM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EARMARKEDFUNDSDOCTYPESTDVH')/$value
semantic_en: "Earmarked Funds Document Type Standard"
semantic_vi: "Earmarked Funds Document Type Std — CDS view giao diện dựa trên I_EarmarkedFunds_DocType."
keywords:
  - "earmarked"
  - "funds"
  - "document"
  - "type"
  - "std"
  - "category"
tags:
  - FI
  - bo:salesorganization
  - component:FI-FM
  - document
  - FI-FM
  - interface-view
  - lob:finance
---
# I_EARMARKEDFUNDSDOCTYPESTDVH

**Earmarked Funds Document Type Standard**

| Property | Value |
|---|---|
| App Component | `FI-FM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EARMARKEDFUNDSDOCTYPESTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EarmarkedFundsDocumentType` | ✓ | |  |  | `CHAR(2)` | Earmarked Fund Document Type |
| `EarmarkedFundsDocumentCategory` | ✓ | |  |  | `NUMC(3)` | Earmarked Funds Document Category |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EARMARKEDFUNDSDOCTYPESTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EARMARKEDFUNDSDOCTYPESTDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEFDOCTYPESTDVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
    usageType: {
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S
      },
    representativeKey: 'EarmarkedFundsDocumentType',
    dataCategory: #VALUE_HELP
  }
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@EndUserText.label: 'Earmarked Funds Document Type Std'

define view I_EarmarkedFundsDocTypeStdVH
  as select from I_EarmarkedFunds_DocType

{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH }   
  key EarmarkedFundsDocumentType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_EarmarkedFunds_DocCategory', element: 'EarmarkedFundsDocumentCategory' } } ] 
      @Search: { defaultSearchElement: true, ranking: #HIGH }   
  key EarmarkedFundsDocumentCategory,
      _Text
}
```
