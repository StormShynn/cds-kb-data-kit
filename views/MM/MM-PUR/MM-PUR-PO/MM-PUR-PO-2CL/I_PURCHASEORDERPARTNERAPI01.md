---
name: I_PURCHASEORDERPARTNERAPI01
description: Purchase OrderPARTNERAPI 01
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
  - partner
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERPARTNERAPI01

**Purchase OrderPARTNERAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |
| `PurchasingOrganization` | ✓ | |  |  |
| `SupplierSubrange` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `PartnerFunction` | ✓ | |  | `cast ( PartnerFunction as parvw preserving type )` |
| `PartnerCounter` | ✓ | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `Supplier` |  | |  |  |
| `SupplierHierarchyCategory` |  | |  |  |
| `SupplierContact` |  | |  |  |
| `EmploymentInternalID` |  | |  |  |
| `DefaultPartner` |  | |  |  |
| `_PurchaseOrder` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IPURORDPARTAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType : #BASIC
@EndUserText.label: 'Purchase Order Partner'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_PurchaseOrderPartnerAPI01 
  as select from I_PurchaseOrderPartner as partner

  association [1..1] to I_PurchaseOrderAPI01      as _PurchaseOrder     on  _PurchaseOrder.PurchaseOrder    = $projection.PurchaseOrder

{ 
      //Key
  key partner.PurchaseOrder,
  key partner.PurchasingOrganization, 
  key SupplierSubrange,
  key Plant,
  key cast ( PartnerFunction as parvw preserving type ) as PartnerFunction,  
  key PartnerCounter,    

      partner.CreatedByUser,
      
      partner.CreationDate,
      
      partner.Supplier,
      
      SupplierHierarchyCategory,
      
      SupplierContact,

      EmploymentInternalID,
      
      DefaultPartner, // default for a particular partner function, checkbox on partner tab in ME21N
  
      // Associations
      _PurchaseOrder
}
```
