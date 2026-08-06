---
name: I_PURCHASEORDERPARTNERTP_2
description: Purchase OrderPARTNERTP 2
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
  - transactional-processing
  - purchase-order
  - partner
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERPARTNERTP_2

**Purchase OrderPARTNERTP 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseOrder` | `PurchaseOrder` |
| key `PartnerFunction` | `PartnerFunction` |
| `SupplierSubrange` | `SupplierSubrange` |
| `Plant` | `Plant` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PartnerCounter` | `PartnerCounter` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `PurchasingDocumentPartnerType` | `PurchasingDocumentPartnerType` |
| `Supplier` | `Supplier` |
| `SupplierHierarchyCategory` | `SupplierHierarchyCategory` |
| `SupplierContact` | `SupplierContact` |
| `PersonWorkAgreement` | `PersonWorkAgreement` |
| `EmploymentInternalID` | `EmploymentInternalID` |
| `DefaultPartner` | `DefaultPartner` |
| `_PartnerFunction` | *Association* |
| `_PartnerFunctionText` | *Association* |
| `_PersonWorkAgreement` | *Association* |
| `_Plant` | *Association* |
| `_PurchaseOrderTP` | *Association* |
| `_PurchasingOrganization` | *Association* |
| `_Supplier` | *Association* |
| `_SupplierContact` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Purchase Order Partner Projection' 
@AccessControl: { authorizationCheck: #PRIVILEGED_ONLY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
define view entity I_PurchaseOrderPartnerTP_2
  as projection on R_PurchaseOrderPartnerTP 
{

  key PurchaseOrder,
  key PartnerFunction,
      SupplierSubrange,
      Plant,
      PurchasingOrganization,
      PartnerCounter,
      CreatedByUser,
      CreationDate,
      PurchasingDocumentPartnerType,
      Supplier,
      SupplierHierarchyCategory,
      SupplierContact,
      PersonWorkAgreement,
      EmploymentInternalID,
      DefaultPartner,
      
      /* Associations */
      _PartnerFunction,
      _PartnerFunctionText,
      _PersonWorkAgreement,
      _Plant,
      //_PurchaseOrder,
      _PurchaseOrderTP : redirected to parent I_PurchaseOrderTP_2,
      _PurchasingOrganization,
      _Supplier,
      _SupplierContact
}
```
