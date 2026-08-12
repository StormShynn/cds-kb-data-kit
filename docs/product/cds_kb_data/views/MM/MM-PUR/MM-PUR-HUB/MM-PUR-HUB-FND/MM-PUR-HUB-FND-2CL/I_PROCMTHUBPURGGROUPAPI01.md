---
name: I_PROCMTHUBPURGGROUPAPI01
description: "Procmthubpurggroupapi 01"
app_component: MM-PUR-HUB-FND-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - component:MM-PUR-HUB-FND-2CL
  - lob:Sourcing & Procurement
---
# I_PROCMTHUBPURGGROUPAPI01

**Procmthubpurggroupapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-FND-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcurementHubSourceSystem` | ✓ | |  | `extsourcesystem` |  |  |
| `ProcmtHubPurchasingGroup` | ✓ | |  | `purchasinggroup` |  |  |
| `ProcmtHubPurchasingGroupName` |  | |  | `purchasinggroupname` |  |  |
| `ProcmtHubPurgGroupPhoneNumber` |  | |  | `purchasinggroupphonenumber` |  |  |
| `ProcmtHubPhoneNumber` |  | |  | `phonenumber` |  |  |
| `ProcmtHubPhoneNumberExtension` |  | |  | `phonenumberextension` |  |  |
| `ProcmtHubEmailAddress` |  | |  | `emailaddress` |  |  |
| `_ProcmtHubBackendSourceSystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProcmtHubBackendSourceSystem` | `I_ProcmtHubBackendSourceSystem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCMTPGRP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Purchasing Group in Connected System'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern : #NONE
@ObjectModel.semanticKey:  [ 'ProcmtHubPurchasingGroup' ]
@ObjectModel.representativeKey: [ 'ProcmtHubPurchasingGroup' ]
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

define view I_ProcmtHubPurgGroupAPI01
  as select from mmpur_ext_t024
  association [1..1] to I_ProcmtHubBackendSourceSystem as _ProcmtHubBackendSourceSystem on $projection.ProcurementHubSourceSystem = _ProcmtHubBackendSourceSystem.ProcurementHubSourceSystem

{
      @ObjectModel.foreignKey.association: '_ProcmtHubBackendSourceSystem'
  key extsourcesystem            as ProcurementHubSourceSystem,
      @ObjectModel.text.element : 'ProcmtHubPurchasingGroupName'
  key purchasinggroup            as ProcmtHubPurchasingGroup,

      @Semantics.text: true
      purchasinggroupname        as ProcmtHubPurchasingGroupName,
      purchasinggroupphonenumber as ProcmtHubPurgGroupPhoneNumber,
      phonenumber                as ProcmtHubPhoneNumber,
      phonenumberextension       as ProcmtHubPhoneNumberExtension,
      emailaddress               as ProcmtHubEmailAddress,
      _ProcmtHubBackendSourceSystem

}
```
