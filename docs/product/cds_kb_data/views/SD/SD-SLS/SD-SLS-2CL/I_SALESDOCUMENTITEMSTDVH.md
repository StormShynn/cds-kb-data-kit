---
name: I_SALESDOCUMENTITEMSTDVH
description: "Salesdocumentitemstdvh"
app_component: SD-SLS-2CL
software_component: SAPSCORE
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
  - SD
  - SD-SLS
  - interface-view
  - value-help
  - standard-value-help
  - sales-document
  - document
  - item-level
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTITEMSTDVH

**Salesdocumentitemstdvh**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  |  |  |
| `SalesDocumentItem` | ✓ | |  |  |  |  |
| `SalesDocumentItemText` |  | |  |  |  |  |
| `SalesDocumentType` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |

## Source Code

```abap
//GENERATED:005:GFBfhyK17kY1w9JfZmsJU0
@AbapCatalog.sqlViewName: 'ISDSLSSDOCITMVH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'SalesDocumentItem'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL

@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Sales Document Item'
define view I_SalesDocumentItemStdVH as select from I_SalesDocumentItem {
  @Search:{
    defaultSearchElement: true,
    ranking: #HIGH
  }
  @ObjectModel.foreignKey.association: '_SalesDocument'
  key I_SalesDocumentItem.SalesDocument,
  
  @ObjectModel.text.element: ['SalesDocumentItemText']
  @Search:{
    defaultSearchElement: true,
    ranking: #LOW
  }
  key I_SalesDocumentItem.SalesDocumentItem,

  @Search:{
    defaultSearchElement: true,
    ranking: #LOW,
    fuzzinessThreshold: 0.9
  }
  I_SalesDocumentItem.SalesDocumentItemText,
  
  @Consumption.hidden: true  
  I_SalesDocumentItem.SalesDocumentType,
  @Consumption.hidden: true
  I_SalesDocumentItem.OrganizationDivision, 
  @Consumption.hidden: true
  I_SalesDocumentItem.SalesOrganization,   
  @Consumption.hidden: true
  I_SalesDocumentItem.DistributionChannel,
  
  @Consumption.hidden: true
  I_SalesDocumentItem._SalesDocument
}
```
