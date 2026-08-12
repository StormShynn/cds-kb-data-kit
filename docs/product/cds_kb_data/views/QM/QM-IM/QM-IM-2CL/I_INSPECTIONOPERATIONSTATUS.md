---
name: I_INSPECTIONOPERATIONSTATUS
description: "Inspectionoperationstatus"
app_component: QM-IM-2CL
software_component: SAPSCORE
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
  - QM
  - QM-IM
  - interface-view
  - inspection
  - status
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONOPERATIONSTATUS

**Inspectionoperationstatus**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderInternalBillOfOperations` | ✓ | |  |  |  |  |
| `InspPlanOperationInternalID` | ✓ | |  |  |  |  |
| `InspectionOpIsCompletionNeeded` |  | |  | `max(tqec30.oper_completion)` |  |  |
| `InspOpHasCharc` |  | |  | `max(case I_InspectionOperation.BillOfOperationsType when 'Q' then 1 else case I_StatusObjectStatusBasic.StatusIsInactive when 'X' then 0 else case I_StatusObjectStatusBasic.StatusCode when 'I0282' then 1 when 'I0283' then 1 else 0 end end end)` |  |  |
| `MatlQualityAuthorizationGroup` |  | |  |  |  |  |
| `InspectionLotType` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPOPERATIONST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Operation Status'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: {
    dataClass: #MIXED,
    sizeCategory: #L,
    serviceQuality: #D
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionOperationStatus as select from I_InspectionOperation
  inner join I_InspectionLot on I_InspectionLot.InspectionLot = I_InspectionOperation.InspectionLot
  left outer join I_StatusObjectStatusBasic on I_InspectionOperation.StatusObject  = I_StatusObjectStatusBasic.StatusObject 
  left outer join tqec30 
    on tqec30.art = I_InspectionLot.InspectionLotType
    and tqec30.werk = I_InspectionLot.Plant
{
    key I_InspectionOperation.OrderInternalBillOfOperations,
    key I_InspectionOperation.InspPlanOperationInternalID,
    max(tqec30.oper_completion) as InspectionOpIsCompletionNeeded,
    //Logic from QEEA_CHECK_OPERATION_STATUS, but customizing neglected because
    //this seems to be more theoretically: Chars should be there, but aren't.
    max(case I_InspectionOperation.BillOfOperationsType
      when 'Q' then 1
      else 
        case I_StatusObjectStatusBasic.StatusIsInactive
          when 'X' then 0
          else
            case I_StatusObjectStatusBasic.StatusCode
              when 'I0282' then 1
              when 'I0283' then 1
            else 0
            end
        end
    end) as InspOpHasCharc,   
    // fields added for Auth Check in DCL
    @Consumption.hidden: true
    I_InspectionOperation._InspectionLot.MatlQualityAuthorizationGroup,
    @Consumption.hidden: true
    @ObjectModel.foreignKey.association: '_InspectionLotType'
    I_InspectionOperation._InspectionLot.InspectionLotType,
    @Consumption.hidden: true
    @ObjectModel.foreignKey.association: '_Plant'
    I_InspectionOperation._InspectionLot.Plant,
    
    // Associations
    I_InspectionOperation._InspectionLot._Plant,
    I_InspectionOperation._InspectionLot._InspectionLotType
}
group by I_InspectionOperation.OrderInternalBillOfOperations, 
         I_InspectionOperation.InspPlanOperationInternalID  ,
         I_InspectionOperation._InspectionLot.InspectionLotType,
         I_InspectionOperation._InspectionLot.Plant,
         I_InspectionOperation._InspectionLot.MatlQualityAuthorizationGroup
```
