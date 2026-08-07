---
name: I_DRCTACTYALLOCPRFTBLTYSGMTTP
description: Drctactyallocprftbltysgmttp
app_component: CA-GTF-FXU-FI-CO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - transactional-processing
  - component:CA-GTF-FXU-FI-CO
  - lob:Cross-Application Components
---
# I_DRCTACTYALLOCPRFTBLTYSGMTTP

**Drctactyallocprftbltysgmttp**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FiscalYear` | ✓ | |  |  |
| `ReferenceDocument` | ✓ | |  |  |
| `ControllingArea` | ✓ | |  |  |
| `ReferenceDocumentItem` | ✓ | |  |  |
| `LedgerGLLineItem` | ✓ | |  |  |
| `ReferenceDocumentType` | ✓ | |  |  |
| `ReferenceDocumentContext` | ✓ | |  |  |
| `AccountingDocument` | ✓ | |  |  |
| `TransactionSubitem` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `Customer` |  | |  |  |
| `CustomerGroup` |  | |  |  |
| `CustomerSupplierIndustry` |  | |  |  |
| `CustomerSupplierCountry` |  | |  |  |
| `SalesDistrict` |  | |  |  |
| `SoldProduct` |  | |  |  |
| `SoldProductGroup` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `BillToParty` |  | |  |  |
| `ShipToParty` |  | |  |  |
| `WBSElementExternalID` |  | |  |  |
| `ServiceDocumentType` |  | |  |  |
| `ServiceDocument` |  | |  |  |
| `ServiceDocumentItem` |  | |  |  |
| `FunctionalArea` |  | |  |  |
| `SalesDocument` |  | |  |  |
| `SalesDocumentItem` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `PartnerProfitCenter` |  | |  |  |
| `ControllingBusTransacType` |  | |  |  |
| `SourceLedger` |  | |  |  |
| `_Item` | | ✓ | | |
| `_ActyAllocation` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Drct Acty Alloc Rcvr Prftblty Sgmt - TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #TRANSACTIONAL
  }
}
@OData.entityType.name:'ActivityAllocationProfitabilitySegment_Type'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_DrctActyAllocPrftbltySgmtTP
  as projection on R_DrctActyAllocPrftbltySgmtTP as _ProfitabilitySegment
  
       
{
  key FiscalYear,
  key ReferenceDocument,
  key ControllingArea, 
  key ReferenceDocumentItem,
  key LedgerGLLineItem,
  key ReferenceDocumentType, 
  key ReferenceDocumentContext, 
  key AccountingDocument,  
      
      TransactionSubitem,    
      CompanyCode,
      Customer,
      CustomerGroup,
      CustomerSupplierIndustry,
      CustomerSupplierCountry,
      SalesDistrict,
      SoldProduct,
      SoldProductGroup,
      SalesOrganization,
      DistributionChannel,
      OrganizationDivision,
      BillToParty,
      ShipToParty,          
      WBSElementExternalID,
      ServiceDocumentType,
      ServiceDocument,
      ServiceDocumentItem, 
      FunctionalArea, 
      SalesDocument,
      SalesDocumentItem, 
      ProfitCenter,
      PartnerProfitCenter,   
        
      ControllingBusTransacType,
      SourceLedger,
      
      _Item : redirected to parent I_DrctActyAllocationItemTP_2,
      _ActyAllocation : redirected to I_DirectActivityAllocationTP_2

}
```
