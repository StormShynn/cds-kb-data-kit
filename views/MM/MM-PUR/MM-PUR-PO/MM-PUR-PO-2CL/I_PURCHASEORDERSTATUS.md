---
name: I_PURCHASEORDERSTATUS
description: Purchase OrderSTATUS
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - purchase-order
  - status
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERSTATUS

**Purchase OrderSTATUS**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchasingDocumentStatus` |  | |  | `case header.PurchasingDocumentDeletionCode when 'X' then cast('10' as mmpur_doc_status) when 'L' then cast('10' as mmpur_doc_status) else case header.PurchasingCompletenessStatus when 'X' then cast('01' as mmpur_doc_status) else case header.PurchasingProcessingStatus when '08' then cast('38' as mmpur_doc_status) else case header.ReleaseIsNotCompleted when 'X' then cast('02' as mmpur_doc_status) else case when (om_error.appl_object_id is null) then case when (pos_ekbe.PurchaseOrder is null) then case when (om_new.appl_object_id is null) then case when (om_old.objky is null) then cast('03' as mmpur_doc_status) else cast('04' as mmpur_doc_status) end else cast('04' as mmpur_doc_status) end else cast('05' as mmpur_doc_status) end else cast('37' as mmpur_doc_status) end end end end end` |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
// =========================================================================
//                  Status of Purchase Order Header
// =========================================================================
// The following status values are supported for PO Header:
//   01 Draft
//   02 In Approval
//   03 Not Sent Yet
//   04 Sent
//   05 Follow-On Documents
//   10 Deleted
//   37 Output Error
//   38 Rejected
// =========================================================================
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AbapCatalog.sqlViewName: 'IMMPOHDRSTATUS'
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Status of a purchase order'
@ObjectModel.supportedCapabilities:[#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.semanticKey: 'PurchaseOrder'
@ObjectModel.representativeKey: 'PurchaseOrder'
define view I_PurchaseOrderStatus
  as select from    I_PurchaseOrder                      as header
    left outer to one join P_PurchaseOrderStatusHist            as pos_ekbe on header.PurchaseOrder = pos_ekbe.PurchaseOrder
    left outer to one join P_PurchaseOrderStatusOMApoc          as om_new on header.PurchaseOrder = om_new.appl_object_id
    left outer to one join P_PurchaseOrderStatusOMNast          as om_old on header.PurchaseOrder = om_old.objky
    left outer to one join P_PurchaseOrderStatusOMErr           as om_error on header.PurchaseOrder = om_error.appl_object_id
{
  key  header.PurchaseOrder as PurchaseOrder,
       case header.PurchasingDocumentDeletionCode
          when 'X' then cast('10' as mmpur_doc_status)
          when 'L' then cast('10' as mmpur_doc_status)
            else case header.PurchasingCompletenessStatus
              when 'X' then cast('01' as mmpur_doc_status)
                else case header.PurchasingProcessingStatus
                  when '08' then cast('38' as mmpur_doc_status)
                    else case header.ReleaseIsNotCompleted
                      when 'X' then cast('02' as mmpur_doc_status)
                        else case when (om_error.appl_object_id is null) then     // ^2879307
                          case when (pos_ekbe.PurchaseOrder is null) then
                             case when (om_new.appl_object_id is null) then
                                case when (om_old.objky is null) then cast('03' as mmpur_doc_status)
                                   else cast('04' as mmpur_doc_status)
                                   end
                                else cast('04' as mmpur_doc_status)
                                end
                             else cast('05' as mmpur_doc_status)                      // v2879307
                             end
                          else cast('37' as mmpur_doc_status)
                          end
                        end
                    end
                end
            end             as PurchasingDocumentStatus,


      PurchaseOrderType,
      PurchasingOrganization,
      PurchasingGroup
}
```
