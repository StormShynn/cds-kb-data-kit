---
name: I_PRMTHBRPLDPURCHASEREQNAPI01
description: PRMTHBRPLDPurchase RequisitionNAPI 01
app_component: MM-PUR-HUB-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - purchase-requisition
  - component:MM-PUR-HUB-PR-2CL
  - lob:Sourcing & Procurement
---
# I_PRMTHBRPLDPURCHASEREQNAPI01

**PRMTHBRPLDPurchase RequisitionNAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProcmtHubPurchaseRequisition` | ✓ | |  |  |
| `ProcurementHubSourceSystem` | ✓ | |  |  |
| `ProcmtHubPurRequisitionType` |  | |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRMTHBPRAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking : #REQUIRED
@EndUserText.label: 'Replicated Purchase Requisition'
@ObjectModel.semanticKey:['ProcmtHubPurchaseRequisition', 'ProcurementHubSourceSystem']
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: #SQL_DATA_SOURCE
@ObjectModel.modelingPattern : #NONE
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey:true
define view I_PrmtHbRpldPurchaseReqnAPI01
  as select from I_PrmtHbRpldPurchaseReqn
{
  key ProcmtHubPurchaseRequisition,
  key ProcurementHubSourceSystem,
      ProcmtHubPurRequisitionType,
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked
}
```
