---
name: I_PERSONWORKAGREEMENT_1
description: "Personworkagreement 1"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_PERSONWORKAGREEMENT_1

**Personworkagreement 1**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonWorkAgreement` | ✓ | |  |  |  |  |
| `Person` |  | |  | `BusinessPartner` |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `PersonFullName` |  | |  |  |  |  |
| `DataControllerSet` |  | |  |  |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_PersonWrkAgrmtForKeyDate` | | ✓ | | | | |
| `_WorkforcePerson` | | ✓ | | | | |
| `_PersonWorkAgrmtToExternalID` | | ✓ | | | | |
| `_PersonWorkAgrmtOrglDetails` | | ✓ | | | | |
| `_PersonWorkAgrmtStatus` | | ✓ | | | | |
| `_PersonWorkAgrmtPlndWrkgTime` | | ✓ | | | | |
| `_PersonWorkAgrmtSrvcCostLevel` | | ✓ | | | | |
| `_PersWrkAgrmtManagerForKeyDte` | | ✓ | | | | |
| `_PersonWorkAgreementType` | | ✓ | | | | |
| `_WorkforcePersonImageURL` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |
| `_PersonWrkAgrmtForKeyDate` | `I_PersonWorkAgrmtForKeyDate` | [1] |
| `_WorkforcePerson` | `I_WorkforcePerson` | [1] |
| `_PersonWorkAgrmtToExternalID` | `I_PersonWorkAgrmtToExternalID` | [1..1] |
| `_PersonWorkAgrmtOrglDetails` | `I_PersonWorkAgrmtOrglDetails` | [1..*] |
| `_PersonWorkAgrmtStatus` | `I_PersonWorkAgrmtStatus` | [1..*] |
| `_PersonWorkAgrmtPlndWrkgTime` | `I_PersonWorkAgrmtPlndWrkgTime` | [0..*] |
| `_PersonWorkAgrmtSrvcCostLevel` | `I_PersonWorkAgrmtSrvcCostLevel` | [0..*] |
| `_PersWrkAgrmtManagerForKeyDte` | `I_PersWrkAgrmtManagerForKeyDte` | [0..*] |
| `_PersonWorkAgreementType` | `I_PersonWorkAgreementType` | [1] |
| `_WorkforcePersonImageURL` | `I_WorkforcePersonImageURL` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPERSWKAGRMT1'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED //#MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
// @AccessControl.personalData.blockingIndicator: 'IsBusinessPurposeCompleted' 
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@AbapCatalog.preserveKey:true
@Metadata.allowExtensions: true
@ObjectModel.representativeKey: 'PersonWorkAgreement'
@ObjectModel.sapObjectNodeType.name:'WorkAssignment'
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Person Work Agreement Details'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view I_PersonWorkAgreement_1
////  as select from P_U_PersonWorkAgreement_1
 as select from  I_HrPersWrkAgrmt  as HrPersonWorkAgreement
    inner join   I_PersWrkAgrmtToPartner as PersonWrkAgrmtToPartner on PersonWrkAgrmtToPartner.PersonWorkAgreement = HrPersonWorkAgreement.PersonWorkAgreement

    inner join   I_BusinessPartner       as BusinessPartner         on  BusinessPartner.BusinessPartner         = PersonWrkAgrmtToPartner.Person
                                                                    and BusinessPartner.BusinessPartnerCategory = '1'
  association [1]    to I_BusinessPartner              as _BusinessPartner              on $projection.Person = _BusinessPartner.BusinessPartner
  association [1]    to I_PersonWorkAgrmtForKeyDate    as _PersonWrkAgrmtForKeyDate     on $projection.PersonWorkAgreement = _PersonWrkAgrmtForKeyDate.PersonWorkAgreement
  association [1]    to I_WorkforcePerson              as _WorkforcePerson              on $projection.Person = _WorkforcePerson.Person
  association [1..1] to I_PersonWorkAgrmtToExternalID  as _PersonWorkAgrmtToExternalID  on $projection.PersonWorkAgreement = _PersonWorkAgrmtToExternalID.PersonWorkAgreement
  association [1..*] to I_PersonWorkAgrmtOrglDetails   as _PersonWorkAgrmtOrglDetails   on _PersonWorkAgrmtOrglDetails.PersonWorkAgreement = $projection.PersonWorkAgreement
  association [1..*] to I_PersonWorkAgrmtStatus        as _PersonWorkAgrmtStatus        on _PersonWorkAgrmtStatus.PersonWorkAgreement = $projection.PersonWorkAgreement
  association [0..*] to I_PersonWorkAgrmtPlndWrkgTime  as _PersonWorkAgrmtPlndWrkgTime  on _PersonWorkAgrmtPlndWrkgTime.PersonWorkAgreement = $projection.PersonWorkAgreement
  association [0..*] to I_PersonWorkAgrmtSrvcCostLevel as _PersonWorkAgrmtSrvcCostLevel on _PersonWorkAgrmtSrvcCostLevel.PersonWorkAgreement = $projection.PersonWorkAgreement
  association [0..*] to I_PersWrkAgrmtManagerForKeyDte as _PersWrkAgrmtManagerForKeyDte on $projection.PersonWorkAgreement = _PersWrkAgrmtManagerForKeyDte.PersonWorkAgreement
  association [1]    to I_PersonWorkAgreementType      as _PersonWorkAgreementType      on $projection.PersonWorkAgreement = _PersonWorkAgreementType.PersonWorkAgreement
  association [0..1] to I_WorkforcePersonImageURL      as _WorkforcePersonImageURL      on $projection.Person = _WorkforcePersonImageURL.Person

{
       @ObjectModel.text.element: 'PersonFullName'
  key  HrPersonWorkAgreement.PersonWorkAgreement as  PersonWorkAgreement,
       BusinessPartner.BusinessPartner as  Person,
       BusinessPartner.AuthorizationGroup,
       @Semantics.text
       BusinessPartner.PersonFullName,
       _PersonWrkAgrmtForKeyDate,
       _PersonWorkAgrmtToExternalID,
       _BusinessPartner,
       _WorkforcePerson,
       _PersonWorkAgrmtOrglDetails,
       _PersonWorkAgrmtStatus,
       _PersonWorkAgrmtPlndWrkgTime,
       _PersonWorkAgrmtSrvcCostLevel,
       _PersWrkAgrmtManagerForKeyDte,
       _PersonWorkAgreementType,
       _WorkforcePersonImageURL,

 //BP Data controller adoption: Added only for DCL check
   @Consumption.hidden:true
   @UI.hidden:true
   BusinessPartner.DataControllerSet         
}


//define view I_PersonWorkAgreement_1
//  as select from P_U_PersonWorkAgreement_1
//  association [1]    to I_BusinessPartner              as _BusinessPartner              on $projection.Person = _BusinessPartner.BusinessPartner
//  association [1]    to I_PersonWorkAgrmtForKeyDate    as _PersonWrkAgrmtForKeyDate     on $projection.PersonWorkAgreement = _PersonWrkAgrmtForKeyDate.PersonWorkAgreement
//  association [1]    to I_WorkforcePerson              as _WorkforcePerson              on $projection.Person = _WorkforcePerson.Person
//  association [1..1] to I_PersonWorkAgrmtToExternalID  as _PersonWorkAgrmtToExternalID  on $projection.PersonWorkAgreement = _PersonWorkAgrmtToExternalID.PersonWorkAgreement
//  association [1..*] to I_PersonWorkAgrmtOrglDetails   as _PersonWorkAgrmtOrglDetails   on _PersonWorkAgrmtOrglDetails.PersonWorkAgreement = $projection.PersonWorkAgreement
//  association [1..*] to I_PersonWorkAgrmtStatus        as _PersonWorkAgrmtStatus        on _PersonWorkAgrmtStatus.PersonWorkAgreement = $projection.PersonWorkAgreement
//  association [0..*] to I_PersonWorkAgrmtPlndWrkgTime  as _PersonWorkAgrmtPlndWrkgTime  on _PersonWorkAgrmtPlndWrkgTime.PersonWorkAgreement = $projection.PersonWorkAgreement
//  association [0..*] to I_PersonWorkAgrmtSrvcCostLevel as _PersonWorkAgrmtSrvcCostLevel on _PersonWorkAgrmtSrvcCostLevel.PersonWorkAgreement = $projection.PersonWorkAgreement
//  association [0..*] to I_PersWrkAgrmtManagerForKeyDte as _PersWrkAgrmtManagerForKeyDte on $projection.PersonWorkAgreement = _PersWrkAgrmtManagerForKeyDte.PersonWorkAgreement
//  association [1]    to I_PersonWorkAgreementType      as _PersonWorkAgreementType      on $projection.PersonWorkAgreement = _PersonWorkAgreementType.PersonWorkAgreement
//
//{
//       @ObjectModel.text.element: 'PersonFullName'
//  key  PersonWorkAgreement,
//       Person,
//       AuthorizationGroup,
//       @Semantics.text
//       PersonFullName,
//       _PersonWrkAgrmtForKeyDate,
//       _PersonWorkAgrmtToExternalID,
//       _BusinessPartner,
//       _WorkforcePerson,
//       _PersonWorkAgrmtOrglDetails,
//       _PersonWorkAgrmtStatus,
//       _PersonWorkAgrmtPlndWrkgTime,
//       _PersonWorkAgrmtSrvcCostLevel,
//       _PersWrkAgrmtManagerForKeyDte,
//       _PersonWorkAgreementType
//}

//  as select from I_HrPersWrkAgrmt        as HrPersonWorkAgreement
//    inner join   I_PersWrkAgrmtToPartner as PersonWrkAgrmtToPartner on PersonWrkAgrmtToPartner.PersonWorkAgreement = HrPersonWorkAgreement.PersonWorkAgreement
//
//    inner join   I_BusinessPartner       as BusinessPartner         on  BusinessPartner.BusinessPartner         = PersonWrkAgrmtToPartner.Person
//                                                                    and BusinessPartner.BusinessPartnerCategory = '1'
//
//  association [1]    to I_BusinessPartner              as _BusinessPartner              on $projection.Person = _BusinessPartner.BusinessPartner
//  association [1]    to I_PersonWorkAgrmtForKeyDate    as _PersonWrkAgrmtForKeyDate     on $projection.PersonWorkAgreement = _PersonWrkAgrmtForKeyDate.PersonWorkAgreement
//  association [1]    to I_WorkforcePerson              as _WorkforcePerson              on $projection.Person = _WorkforcePerson.Person
//  association [1..1] to I_PersonWorkAgrmtToExternalID  as _PersonWorkAgrmtToExternalID  on $projection.PersonWorkAgreement = _PersonWorkAgrmtToExternalID.PersonWorkAgreement
//  association [1..*] to I_PersonWorkAgrmtOrglDetails   as _PersonWorkAgrmtOrglDetails   on _PersonWorkAgrmtOrglDetails.PersonWorkAgreement = $projection.PersonWorkAgreement
//  association [1..*] to I_PersonWorkAgrmtStatus        as _PersonWorkAgrmtStatus        on _PersonWorkAgrmtStatus.PersonWorkAgreement = $projection.PersonWorkAgreement
//  association [0..*] to I_PersonWorkAgrmtPlndWrkgTime  as _PersonWorkAgrmtPlndWrkgTime  on _PersonWorkAgrmtPlndWrkgTime.PersonWorkAgreement = $projection.PersonWorkAgreement
//  association [0..*] to I_PersonWorkAgrmtSrvcCostLevel as _PersonWorkAgrmtSrvcCostLevel on _PersonWorkAgrmtSrvcCostLevel.PersonWorkAgreement = $projection.PersonWorkAgreement
//  association [0..*] to I_PersWrkAgrmtManagerForKeyDte as _PersWrkAgrmtManagerForKeyDte on $projection.PersonWorkAgreement = _PersWrkAgrmtManagerForKeyDte.PersonWorkAgreement
//  association [1]    to I_PersonWorkAgreementType      as _PersonWorkAgreementType      on $projection.PersonWorkAgreement = _PersonWorkAgreementType.PersonWorkAgreement
//
//{
//       @ObjectModel.text.element: 'PersonFullName'
//  key  HrPersonWorkAgreement.PersonWorkAgreement                  as  PersonWorkAgreement,
//       BusinessPartner.BusinessPartner                            as  Person,
//       BusinessPartner.AuthorizationGroup,
//       @Semantics.text
//       BusinessPartner.PersonFullName,
//       _PersonWrkAgrmtForKeyDate,
//       _PersonWorkAgrmtToExternalID,
//       _BusinessPartner,
//       _WorkforcePerson,
//       _PersonWorkAgrmtOrglDetails,
//       _PersonWorkAgrmtStatus,
//       _PersonWorkAgrmtPlndWrkgTime,
//       _PersonWorkAgrmtSrvcCostLevel,
//       _PersWrkAgrmtManagerForKeyDte,
//       _PersonWorkAgreementType
//}
```
