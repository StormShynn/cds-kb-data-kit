---
name: I_MRPPROFILETEXT
description: "Mrpprofiletext"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_MRPPROFILETEXT

**Mrpprofiletext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `MRPProfileName` |  | |  | `ktext` |  |  |
| `_MRPProfile` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPProfile` | `I_MRPProfile` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMRPPROFILET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'MRP Profile - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'MRPProfile'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name:'MRPProfileText'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Analytics: { dataExtraction.enabled: true }
@Analytics.internalName:#LOCAL
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [
                                     #EXTRACTION_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE ]


define view I_MRPProfileText
  as select from t401t
  association [0..1] to I_MRPProfile as _MRPProfile on $projection.MRPProfile = _MRPProfile.MRPProfile
  association [0..1] to I_Language   as _Language   on $projection.Language = _Language.Language
{

  key dispr       as MRPProfile,

      @Semantics.language: true
  key t401t.spras as Language,

      @Semantics.text:true
      @Search.defaultSearchElement: true
      t401t.ktext as MRPProfileName,

      _MRPProfile,
      _Language

}
```
