---
name: I_PCLGSDCITMPACKGINSTRUCTIONTP
description: "Pclgsdcitmpackginstructiontp"
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
  - transactional-processing
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# I_PCLGSDCITMPACKGINSTRUCTIONTP

**Pclgsdcitmpackginstructiontp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PCLgsDcItmPackgInstructionUUID` | ✓ | |  |  |  |  |
| `ProdCmplncLogsDocumentUUID` |  | |  |  |  |  |
| `ProdCmplncLogsDocumentItem` |  | |  |  |  |  |
| `PackingInstructionSystemUUID` |  | |  |  |  |  |
| `PackingInstructionNumber` |  | |  |  |  |  |
| `NumberOfHandlingUnits` |  | |  |  |  |  |
| `CreationUTCDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeUTCDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Document` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  sapObjectNodeType.name: 'PCLgsDcItmPackgInstruction',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE
}
@VDM.viewType: #TRANSACTIONAL

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@EndUserText.label: 'PCLgsDc Item Packing Instruction - TP'
define view entity I_PCLgsDcItmPackgInstructionTP
  as projection on R_PCLgsDcItmPackgInstructionTP
{
  key PCLgsDcItmPackgInstructionUUID,
      ProdCmplncLogsDocumentUUID,
      ProdCmplncLogsDocumentItem,
      @Semantics.uuid: true
      PackingInstructionSystemUUID,
      PackingInstructionNumber,
      NumberOfHandlingUnits,

      @Semantics.systemDateTime.createdAt: true
      CreationUTCDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeUTCDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      _Item     : redirected to parent I_ProdCmplncLogsDocumentItemTP,
      _Document : redirected to I_ProdCmplncLogsDocumentTP
}
```
