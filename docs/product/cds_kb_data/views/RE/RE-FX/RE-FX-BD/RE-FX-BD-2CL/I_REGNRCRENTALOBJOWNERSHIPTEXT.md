---
name: I_REGNRCRENTALOBJOWNERSHIPTEXT
description: "Regnrcrentalobjownershiptext"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - text-view
  - text
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REGNRCRENTALOBJOWNERSHIPTEXT

**Regnrcrentalobjownershiptext**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REGnrcRentalObjOwnershipID` | ✓ | |  | `ownershipid` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `REGnrcRentalObjOwnershipIDText` |  | |  | `description` |  |  |
| `_REGnrcRentalObjOwnership` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REGnrcRentalObjOwnership` | `I_REGnrcRentalObjOwnership` | [0..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory:[#NONE]
@AccessControl.authorizationCheck:#NOT_REQUIRED


@Analytics:{
    dataExtraction.enabled: true,
    technicalName: 'IREGOOWNSHPT'
  }


@ObjectModel: {
                usageType: { 
                             dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                            },
                dataCategory: #TEXT,
                representativeKey: 'REGnrcRentalObjOwnershipID',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY ],
                sapObjectNodeType.name: 'RERentalObjectOwnershipText'
}

@Search.searchable: true
@VDM.viewType:#BASIC
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label:'Real Estate Rental Obj Ownership - Text'
define view entity I_REGnrcRentalObjOwnershipText
  as select from tivgoownershipt
  association [0..1] to I_REGnrcRentalObjOwnership as _REGnrcRentalObjOwnership on $projection.REGnrcRentalObjOwnershipID = _REGnrcRentalObjOwnership.REGnrcRentalObjOwnershipID
  association [1..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
  key ownershipid as REGnrcRentalObjOwnershipID,
      @Semantics.language:true
  key spras       as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW  
      @Semantics.text:true
      description as REGnrcRentalObjOwnershipIDText,
      // Associations
      _REGnrcRentalObjOwnership,
      _Language
}
```
