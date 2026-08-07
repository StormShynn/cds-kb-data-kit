---
name: I_DISPUTECASECONTACT
description: Disputecasecontact
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-DM
  - interface-view
  - dispute
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_DISPUTECASECONTACT

**Disputecasecontact**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserID` | ✓ | |  |  |  |  |
| `FullName` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IDISPCASECONTACT'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@VDM.viewType: #COMPOSITE
//@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Dispute Case Contact'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'UserID'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'BusinessUser'
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture:
        {
           mapping: [
             {
               viewElement: [ 'UserID' ],
               role: #MAIN,
               table: 'usr21',
               tableElement: ['bname']
             }
           ]
        }
}

define view I_DisputeCaseContact
  as select from I_PMContactCardUser
{
      @ObjectModel.text.element:  [ 'FullName' ]
  key UserID as UserID,
      @Semantics.text: true
      FullName,
      AuthorizationGroup
}
//  as select from I_UserContactCard    ! This view has PRIVILEGED ONLY => F4 help does not work.
//                                        And: view is not released, but a direct association
//                                             from e.g. I_ResolvedDisputeCase would need it
//{
//      @ObjectModel.text.element:  [ 'FullName' ]
//  key ContactCardID as UserID,
//      @Semantics.text: true
//      FullName
//}
```
