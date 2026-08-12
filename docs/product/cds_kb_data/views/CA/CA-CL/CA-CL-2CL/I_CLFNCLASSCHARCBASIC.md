---
name: I_CLFNCLASSCHARCBASIC
description: "Clfnclasscharcbasic"
app_component: CA-CL-2CL
software_component: SAP_BASIS
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassInternalID` | ✓ | |  | `clint` | `NUMC(10)` | Internal Class Number |
| `CharcPositionNumber` | ✓ | |  | `posnr` | `NUMC(3)` | Position number |
| `TimeIntervalNumber` | ✓ | |  | `adzhl` | `NUMC(4)` | Internal Counter for Archiving Objects by ECM |
| `CharcInternalID` |  | |  | `cast ( ClassCharc.imerk as atinn_no_conv preserving type )` | `NUMC(10)` | Characteristic Internal ID |
| `OverwrittenCharcInternalID` |  | |  | `cast ( ClassCharc.omerk as atinn_no_conv preserving type )` | `NUMC(10)` | Characteristic Internal ID |
| `ClfnOrganizationalArea` |  | |  | `cast ( ClassCharc.abtei as clfnorganizationalarea preserving type )` | `CHAR(10)` | Organizational Area |
| `ClassType` |  | |  | `klart` | `CHAR(3)` | Class Type |
| `ChangeNumber` |  | |  | `aennr` | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  | `datuv` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  | `datub` | `DATS(8)` | Valid-to date |
| `IsDeleted` |  | |  | `lkenz` | `CHAR(1)` | Deletion Indicator |
| `CharcOriginText` |  | |  | `herku` | `CHAR(10)` | Characteristic origin |
| `CharcIsProposalRelevant` |  | |  | `prop_rel` | `CHAR(1)` | Proposal Relevant |
| `CharcIsPrptnOrProdUnitRelevant` |  | |  | `pprel` | `CHAR(1)` | Proportion/Product Unit Relevant |
| `CharcIsPrintRelevant` |  | |  | `cast ( case when ClassCharc.amerk = '1000000000' then 'X' when ClassCharc.amerk = '1200000000' then 'X' when ClassCharc.amerk = '1300000000' then 'X' when ClassCharc.amerk = '1400000000' then 'X' when ClassCharc.amerk = '1230000000' then 'X' when ClassCharc.amerk = '1240000000' then 'X' when ClassCharc.amerk = '1340000000' then 'X' when ClassCharc.amerk = '1234000000' then 'X' when not ( ClassCharc.amerk = '1000000000' and ClassCharc.amerk = '1200000000' and ClassCharc.amerk = '1300000000' and ClassCharc.amerk = '1400000000' and ClassCharc.amerk = '1230000000' and ClassCharc.amerk = '1240000000' and ClassCharc.amerk = '1340000000' and ClassCharc.amerk = '1234000000' ) then '' end as charcisprintrelevant preserving type )` | `CHAR(1)` | Characteristic Is Print Relevant Indicator |
| `CharcIsSearchRelevant` |  | |  | `cast ( case when ClassCharc.amerk = '2000000000' then 'X' when ClassCharc.amerk = '1200000000' then 'X' when ClassCharc.amerk = '2300000000' then 'X' when ClassCharc.amerk = '2400000000' then 'X' when ClassCharc.amerk = '1230000000' then 'X' when ClassCharc.amerk = '1240000000' then 'X' when ClassCharc.amerk = '2340000000' then 'X' when ClassCharc.amerk = '1234000000' then 'X' when not ( ClassCharc.amerk = '2000000000' and ClassCharc.amerk = '1200000000' and ClassCharc.amerk = '2300000000' and ClassCharc.amerk = '2400000000' and ClassCharc.amerk = '1230000000' and ClassCharc.amerk = '1240000000' and ClassCharc.amerk = '2340000000' and ClassCharc.amerk = '1234000000' ) then '' end as charcissearchrelevant preserving type )` | `CHAR(1)` | Characteristic Is Search Relevant Indicator |
| `CharcIsDisplayRelevant` |  | |  | `cast ( case when ClassCharc.amerk = '3000000000' then 'X' when ClassCharc.amerk = '1300000000' then 'X' when ClassCharc.amerk = '2300000000' then 'X' when ClassCharc.amerk = '3400000000' then 'X' when ClassCharc.amerk = '1230000000' then 'X' when ClassCharc.amerk = '1340000000' then 'X' when ClassCharc.amerk = '2340000000' then 'X' when ClassCharc.amerk = '1234000000' then 'X' when not ( ClassCharc.amerk = '3000000000' and ClassCharc.amerk = '1300000000' and ClassCharc.amerk = '2300000000' and ClassCharc.amerk = '3400000000' and ClassCharc.amerk = '1230000000' and ClassCharc.amerk = '1340000000' and ClassCharc.amerk = '2340000000' and ClassCharc.amerk = '1234000000' ) then '' end as charcisdisplayrelevant preserving type )` | `CHAR(1)` | Characteristic Is Display Relevant Indicator |
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
