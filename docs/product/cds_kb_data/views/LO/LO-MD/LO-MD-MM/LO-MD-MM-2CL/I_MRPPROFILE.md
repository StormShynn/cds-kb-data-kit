---
name: I_MRPPROFILE
description: "Mrpprofile"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_MRPPROFILE

**Mrpprofile**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPProfile` | ✓ | |  | `dispr` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MRPProfileText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMRPPROFILE' 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataCategory: #DIMENSION }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'MRPProfile'
@ObjectModel.semanticKey: ['MRPProfile']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #MASTER}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Profile'
@ObjectModel.sapObjectNodeType.name:'MRPProfile'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE ]
@Analytics.internalName:#LOCAL
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
define view I_MRPProfile
  as select from mdip
  association [0..*] to I_MRPProfileText as _Text on $projection.MRPProfile = _Text.MRPProfile
{
      @Search: {defaultSearchElement: true, fuzzinessThreshold: 0.8}

      @ObjectModel.text.association: '_Text'
  key dispr as MRPProfile,
      _Text

}
```
