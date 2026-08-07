---
name: I_CLFNCLASSCHARCBASIC
description: Clfnclasscharcbasic
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSCHARCBASIC

**Clfnclasscharcbasic**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassInternalID` | ✓ | |  | `clint` |  |  |
| `CharcPositionNumber` | ✓ | |  | `posnr` |  |  |
| `TimeIntervalNumber` | ✓ | |  | `adzhl` |  |  |
| `CharcInternalID` |  | |  | `cast ( ClassCharc.imerk as atinn_no_conv preserving type )` |  |  |
| `OverwrittenCharcInternalID` |  | |  | `cast ( ClassCharc.omerk as atinn_no_conv preserving type )` |  |  |
| `ClfnOrganizationalArea` |  | |  | `cast ( ClassCharc.abtei as clfnorganizationalarea preserving type )` |  |  |
| `ClassType` |  | |  | `klart` |  |  |
| `ChangeNumber` |  | |  | `aennr` |  |  |
| `ValidityStartDate` |  | |  | `datuv` |  |  |
| `ValidityEndDate` |  | |  | `datub` |  |  |
| `IsDeleted` |  | |  | `lkenz` |  |  |
| `CharcOriginText` |  | |  | `herku` |  |  |
| `CharcIsProposalRelevant` |  | |  | `prop_rel` |  |  |
| `CharcIsPrptnOrProdUnitRelevant` |  | |  | `pprel` |  |  |
| `CharcIsPrintRelevant` |  | |  | `cast ( case when ClassCharc.amerk = '1000000000' then 'X' when ClassCharc.amerk = '1200000000' then 'X' when ClassCharc.amerk = '1300000000' then 'X' when ClassCharc.amerk = '1400000000' then 'X' when ClassCharc.amerk = '1230000000' then 'X' when ClassCharc.amerk = '1240000000' then 'X' when ClassCharc.amerk = '1340000000' then 'X' when ClassCharc.amerk = '1234000000' then 'X' when not ( ClassCharc.amerk = '1000000000' and ClassCharc.amerk = '1200000000' and ClassCharc.amerk = '1300000000' and ClassCharc.amerk = '1400000000' and ClassCharc.amerk = '1230000000' and ClassCharc.amerk = '1240000000' and ClassCharc.amerk = '1340000000' and ClassCharc.amerk = '1234000000' ) then '' end as charcisprintrelevant preserving type )` |  |  |
| `CharcIsSearchRelevant` |  | |  | `cast ( case when ClassCharc.amerk = '2000000000' then 'X' when ClassCharc.amerk = '1200000000' then 'X' when ClassCharc.amerk = '2300000000' then 'X' when ClassCharc.amerk = '2400000000' then 'X' when ClassCharc.amerk = '1230000000' then 'X' when ClassCharc.amerk = '1240000000' then 'X' when ClassCharc.amerk = '2340000000' then 'X' when ClassCharc.amerk = '1234000000' then 'X' when not ( ClassCharc.amerk = '2000000000' and ClassCharc.amerk = '1200000000' and ClassCharc.amerk = '2300000000' and ClassCharc.amerk = '2400000000' and ClassCharc.amerk = '1230000000' and ClassCharc.amerk = '1240000000' and ClassCharc.amerk = '2340000000' and ClassCharc.amerk = '1234000000' ) then '' end as charcissearchrelevant preserving type )` |  |  |
| `CharcIsDisplayRelevant` |  | |  | `cast ( case when ClassCharc.amerk = '3000000000' then 'X' when ClassCharc.amerk = '1300000000' then 'X' when ClassCharc.amerk = '2300000000' then 'X' when ClassCharc.amerk = '3400000000' then 'X' when ClassCharc.amerk = '1230000000' then 'X' when ClassCharc.amerk = '1340000000' then 'X' when ClassCharc.amerk = '2340000000' then 'X' when ClassCharc.amerk = '1234000000' then 'X' when not ( ClassCharc.amerk = '3000000000' and ClassCharc.amerk = '1300000000' and ClassCharc.amerk = '2300000000' and ClassCharc.amerk = '3400000000' and ClassCharc.amerk = '1230000000' and ClassCharc.amerk = '1340000000' and ClassCharc.amerk = '2340000000' and ClassCharc.amerk = '1234000000' ) then '' end as charcisdisplayrelevant preserving type )` |  |  |
| `_Class` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Class` | `I_ClfnClass` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'INGCCLS12'
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Clfn Class Characteristic Basic'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,   
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ClfnClassCharcBasic
  as select from ksml as ClassCharc

    association [0..1] to I_ClfnClass as _Class
        on $projection.ClassInternalID = _Class.ClassInternalID
        
{     
  key ClassCharc.clint    as ClassInternalID,
  key ClassCharc.posnr    as CharcPositionNumber,
  key ClassCharc.adzhl    as TimeIntervalNumber,  
      cast ( ClassCharc.imerk as atinn_no_conv preserving type ) as CharcInternalID,
      cast ( ClassCharc.omerk as atinn_no_conv preserving type ) as OverwrittenCharcInternalID,
      cast ( ClassCharc.abtei as clfnorganizationalarea preserving type ) as ClfnOrganizationalArea,
      ClassCharc.klart    as ClassType,
      ClassCharc.aennr    as ChangeNumber,
      ClassCharc.datuv    as ValidityStartDate,
      ClassCharc.datub    as ValidityEndDate,
      ClassCharc.lkenz    as IsDeleted,
      ClassCharc.herku    as CharcOriginText,
      ClassCharc.prop_rel as CharcIsProposalRelevant,
      ClassCharc.pprel    as CharcIsPrptnOrProdUnitRelevant,

      cast ( case
      when ClassCharc.amerk = '1000000000' then 'X'
      when ClassCharc.amerk = '1200000000' then 'X'
      when ClassCharc.amerk = '1300000000' then 'X'
      when ClassCharc.amerk = '1400000000' then 'X'
      when ClassCharc.amerk = '1230000000' then 'X'
      when ClassCharc.amerk = '1240000000' then 'X'
      when ClassCharc.amerk = '1340000000' then 'X'
      when ClassCharc.amerk = '1234000000' then 'X'
      when not ( ClassCharc.amerk = '1000000000' and 
                 ClassCharc.amerk = '1200000000' and
                 ClassCharc.amerk = '1300000000' and
                 ClassCharc.amerk = '1400000000' and
                 ClassCharc.amerk = '1230000000' and
                 ClassCharc.amerk = '1240000000' and
                 ClassCharc.amerk = '1340000000' and
                 ClassCharc.amerk = '1234000000' ) then ''
      end as charcisprintrelevant preserving type ) as CharcIsPrintRelevant, 
      
      cast ( case
      when ClassCharc.amerk = '2000000000' then 'X'
      when ClassCharc.amerk = '1200000000' then 'X'
      when ClassCharc.amerk = '2300000000' then 'X'
      when ClassCharc.amerk = '2400000000' then 'X'
      when ClassCharc.amerk = '1230000000' then 'X'
      when ClassCharc.amerk = '1240000000' then 'X'
      when ClassCharc.amerk = '2340000000' then 'X'
      when ClassCharc.amerk = '1234000000' then 'X'
      when not ( ClassCharc.amerk = '2000000000' and 
                 ClassCharc.amerk = '1200000000' and
                 ClassCharc.amerk = '2300000000' and
                 ClassCharc.amerk = '2400000000' and
                 ClassCharc.amerk = '1230000000' and
                 ClassCharc.amerk = '1240000000' and
                 ClassCharc.amerk = '2340000000' and
                 ClassCharc.amerk = '1234000000' ) then ''
      end as charcissearchrelevant preserving type ) as CharcIsSearchRelevant, 
      
      cast ( case   
      when ClassCharc.amerk = '3000000000' then 'X'
      when ClassCharc.amerk = '1300000000' then 'X'
      when ClassCharc.amerk = '2300000000' then 'X'
      when ClassCharc.amerk = '3400000000' then 'X'
      when ClassCharc.amerk = '1230000000' then 'X'
      when ClassCharc.amerk = '1340000000' then 'X'
      when ClassCharc.amerk = '2340000000' then 'X'
      when ClassCharc.amerk = '1234000000' then 'X'
      when not ( ClassCharc.amerk = '3000000000' and 
                 ClassCharc.amerk = '1300000000' and
                 ClassCharc.amerk = '2300000000' and
                 ClassCharc.amerk = '3400000000' and
                 ClassCharc.amerk = '1230000000' and
                 ClassCharc.amerk = '1340000000' and
                 ClassCharc.amerk = '2340000000' and
                 ClassCharc.amerk = '1234000000' ) then ''
      end as charcisdisplayrelevant preserving type ) as CharcIsDisplayRelevant,
      
      _Class
}
```
