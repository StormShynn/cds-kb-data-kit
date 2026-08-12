---
name: I_CREDITCASECONTACT
description: "Creditcasecontact"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CREDITCASECONTACT

**Creditcasecontact**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserID` | ✓ | |  | `ContactCardID` |  |  |
| `FullName` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICRDTCASECONTACT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel.representativeKey: 'UserID'
@EndUserText.label: 'Credit Case Contact'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CreditCaseContact
  as select from I_UserContactCard
{
      @ObjectModel.text.element:  [ 'FullName' ]
  key ContactCardID as UserID,
      @Semantics.text: true
      FullName
}
```
