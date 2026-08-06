---
name: I_PERSONWORKAGRMTTOEXTERNALID
description: Personworkagrmttoexternalid
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-WFD
  - interface-view
  - component:CA-WFD
  - lob:Cross-Application Components
---
# I_PERSONWORKAGRMTTOEXTERNALID

**Personworkagrmttoexternalid**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PersonWorkAgreement` | `cast(dets.workforce_assgmt_id as persno preserving type )` |
| key `CompanyCode` | `dets.company_code` |
| `PersonWorkAgreementExternalID` | `case when keymap.user_id is not null then cast ( keymap.user_id as /shcm/workagreement_externalid ) else cast ( dets.workforce_assgmt_id as /shcm/workagreement_externalid ) end` |
| `PersonWorkAgrmtAuthznGrpg` | `cast ('' as vdsk1 )` |
| `_CompanyCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPERWKAGREXT'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED //#MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'PersonWorkAgreement'
@EndUserText.label: 'Mapping between Work agrrement internal and External IDs'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_PersonWorkAgrmtToExternalID
  as select distinct from wfd_d_assgmtdets  as dets
  left outer to one join  wfd_d_keymap      as keymap on dets.workforce_assgmt_id = keymap.workforce_assgmt_id
       association [1] to I_CompanyCode     as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
  key cast(dets.workforce_assgmt_id as persno preserving type ) as PersonWorkAgreement,
  @ObjectModel.foreignKey.association : '_CompanyCode'
  key dets.company_code                                         as CompanyCode,
      case when keymap.user_id is not null
      then cast ( keymap.user_id           as /shcm/workagreement_externalid )
      else cast ( dets.workforce_assgmt_id as /shcm/workagreement_externalid )
      end                                                       as PersonWorkAgreementExternalID,
      cast ('' as vdsk1 )                                       as PersonWorkAgrmtAuthznGrpg,  //for DCL
      _CompanyCode
}
  where dets.company_code <> '' and dets.technical_inactive_ind is initial 
    and dets.block_ind = ''
    
//  as select from P_PersonWorkAgrmtToExternalID
/*    as select from WFD_TF_PersonWorkToExternalID( p_client : $session.client ) as external
    association [1] to I_CompanyCode as _CompanyCode on external.CompanyCode = _CompanyCode.CompanyCode
    
{
  key PersonWorkAgreement,
  @ObjectModel.foreignKey.association : '_CompanyCode'
  key CompanyCode,
      PersonWorkAgreementExternalID,
      //for DCL
      PersonWorkAgrmtAuthznGrpg,
      _CompanyCode

}*/

//define view I_PersonWorkAgrmtToExternalID
//  as select from P_PersonWorkAgrmtToExternalID
//{
//  key PersonWorkAgreement,
//  @ObjectModel.foreignKey.association : '_CompanyCode'
//  key CompanyCode,
//      PersonWorkAgreementExternalID,
//      //for DCL
//      PersonWorkAgrmtAuthznGrpg,
//      _CompanyCode
//
//}

  
//    as select distinct from pa0001                  as PA0001
//    inner join            pa0001                  as PA0001_ForAuthorization on  pa0001.pernr                  =  PA0001_ForAuthorization.pernr
//                                                                             and PA0001_ForAuthorization.endda =  '99991231'
//                                                                             and PA0001_ForAuthorization.sprps <> 'X'
//    left outer join       I_PersonWorkAgrmtToECId as PA0105                  on pa0001.pernr = PA0105.PersonWorkAgreement
//    association [1]    to I_CompanyCode            as _CompanyCode            on  pa0001.bukrs = _CompanyCode.CompanyCode
//
//{
//  key pa0001.pernr                      as PersonWorkAgreement,
//  @ObjectModel.foreignKey.association : '_CompanyCode'
//  key pa0001.bukrs                      as CompanyCode,
//      case when PA0105.PersonWorkAgreementExternalID is not null
//      then cast ( PA0105.PersonWorkAgreementExternalID as /shcm/workagreement_externalid )
//      else
//         cast( pa0001.pernr as /shcm/workagreement_externalid )
//      end                               as PersonWorkAgreementExternalID,
//      //for DCL
//      PA0001_ForAuthorization.vdsk1     as PersonWorkAgrmtAuthznGrpg,
//      _CompanyCode
//
//}
//where
//  pa0001.sprps <> 'X'
```
