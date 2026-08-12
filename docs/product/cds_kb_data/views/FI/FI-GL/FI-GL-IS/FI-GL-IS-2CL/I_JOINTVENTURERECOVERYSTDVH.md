---
name: I_JOINTVENTURERECOVERYSTDVH
description: "Joint Venture Recovery"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYSTDVH')/$value
semantic_en: "Joint Venture Recovery"
semantic_vi: "Joint Venture Recovery — CDS view giao diện dựa trên I_JointVentureRecovery."
keywords:
  - "joint"
  - "venture"
  - "recovery"
  - "company"
  - "code"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_JOINTVENTURERECOVERYSTDVH

**Joint Venture Recovery**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `JointVentureRecoveryCode` | ✓ | |  |  | `CHAR(2)` | Recovery Indicator |
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYSTDVH')/$value)*

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFIJVR__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'JointVentureRecoveryCode'

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY,#VALUE_HELP_PROVIDER]
@EndUserText.label: 'Joint Venture Recovery'
define view I_JointVentureRecoveryStdVH as select from I_JointVentureRecovery {
  @ObjectModel.foreignKey.association: '_CompanyCode'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key CompanyCode,
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key JointVentureRecoveryCode,

  _Text,

  @Consumption.hidden: true
  _CompanyCode
}
```
