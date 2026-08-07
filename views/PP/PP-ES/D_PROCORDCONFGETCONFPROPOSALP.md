---
name: D_PROCORDCONFGETCONFPROPOSALP
description: D Procordconfgetconfproposalp
app_component: PP-ES
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-ES
  - component:PP-ES
  - lob:Manufacturing
---
# D_PROCORDCONFGETCONFPROPOSALP

**D Procordconfgetconfproposalp**

| Property | Value |
|---|---|
| App Component | `PP-ES` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConfirmationGroup` |  | |  | `pph_rueck` |  |  |
| `OrderID` |  | |  | `manufacturingorder` |  |  |
| `OrderOperation` |  | |  | `vdm_vornr` |  |  |
| `OrderSuboperation` |  | |  | `vdm_uvorn` |  |  |
| `OrderConfirmationRecordType` |  | |  | `co_satza` |  |  |
| `ConfirmationUnit` |  | |  | `meinh` |  |  |
| `ConfirmationUnitISOCode` |  | |  | `isocd_unit` |  |  |
| `ConfirmationUnitSAPCode` |  | |  | `meinsint` |  |  |
| `ConfirmationYieldQuantity` |  | |  | `ru_lmnga` |  |  |
| `ConfirmationScrapQuantity` |  | |  | `ru_xmnga` |  |  |
| `QuantityIsToBeProposed` |  | |  | `vssmg` |  |  |
| `ActivityIsToBeProposed` |  | |  | `vssle` |  |  |
| `DateAndTimeIsToBeProposed` |  | |  | `vsszt` |  |  |
| `PersonnelIsToBeProposed` |  | |  | `vsszu` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameter for Action Conf Proposal'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ProcOrdConfGetConfProposalP 
{
    ConfirmationGroup               : pph_rueck; 
    OrderID                         : manufacturingorder;
    OrderOperation                  : vdm_vornr;
    OrderSuboperation               : vdm_uvorn;
    OrderConfirmationRecordType     : co_satza;
    @Semantics.unitOfMeasure: true
    ConfirmationUnit                : meinh;
    ConfirmationUnitISOCode         : isocd_unit;
    ConfirmationUnitSAPCode         : meinsint;
    @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'    
    ConfirmationYieldQuantity       : ru_lmnga;
    @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'    
    ConfirmationScrapQuantity       : ru_xmnga;
    QuantityIsToBeProposed          : vssmg;
    ActivityIsToBeProposed          : vssle;
    DateAndTimeIsToBeProposed       : vsszt;
    PersonnelIsToBeProposed         : vsszu;
}
```
