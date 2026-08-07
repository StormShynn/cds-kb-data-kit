---
name: I_PRODUCTPROCMTPROFILETEXT
description: Productprocmtprofiletext
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - product
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTPROCMTPROFILETEXT

**Productprocmtprofiletext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcurementSubType` | ✓ | |  | `cast ( MaterialProcurementProfile as sobsl preserving type )` |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ProcurementSubTypeText` |  | |  | `MaterialProcurementProfileName` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDPRCMTPROFTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Search.searchable: true
@ObjectModel.representativeKey:'ProcurementSubType'
@EndUserText.label: 'Product Procurement Profile - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT
                                    ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_ProductProcmtProfileText
  as select from I_MatlProcurementProfileText
  association [0..1] to I_Plant    as _Plant    on $projection.Plant = _Plant.Plant
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @EndUserText.label: 'Special Procurement Type'
  key cast ( MaterialProcurementProfile as sobsl preserving type ) as ProcurementSubType,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant                                                        as Plant,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language                                                     as Language,

      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #LOW
      }
      @EndUserText.label: 'Special Procurement Type Name'
      MaterialProcurementProfileName                               as ProcurementSubTypeText,

      // Associations
      _Plant,
      _Language


}
```
