---
name: I_VARCONFIGNTABLECOLUMNTP
description: "Varconfigntablecolumntp"
app_component: LO-VCH-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-VCH
  - LO-VCH-API
  - interface-view
  - transactional-processing
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# I_VARCONFIGNTABLECOLUMNTP

**Varconfigntablecolumntp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VarConfignTblName` | ✓ | |  |  |  |  |
| `Characteristic` | ✓ | |  |  |  |  |
| `VarConfignTblColumnPosition` |  | |  |  |  |  |
| `VarConfignTblCstmStorFieldName` |  | |  |  |  |  |
| `CharcInternalID` |  | |  |  |  |  |
| `_Table` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Variant Table Column - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  }
}
define view entity I_VarConfignTableColumnTP
  as projection on R_VarConfignTableColumnTP
{
  key VarConfignTblName,
  key Characteristic,
      VarConfignTblColumnPosition,
      VarConfignTblCstmStorFieldName,
      CharcInternalID,

      /* Associations */
      _Table : redirected to parent I_VarConfignTableTP
}
```
