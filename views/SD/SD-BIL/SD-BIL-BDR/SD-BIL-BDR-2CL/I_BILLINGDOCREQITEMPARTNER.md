---
name: I_BILLINGDOCREQITEMPARTNER
description: Billing DocumentREQITEMPARTNER
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - billing-document
  - billing
  - item-level
  - partner
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLINGDOCREQITEMPARTNER

**Billing DocumentREQITEMPARTNER**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillingDocumentRequest` | ✓ | |  | `cast( Partner.BillingDocument as vbeln_bdr preserving type )` |
| `BillingDocumentRequestItem` |  | |  | `}] key cast( Partner.BillingDocumentItem as posnr_bdr preserving type )` |
| `PartnerFunction` | ✓ | |  | `cast(Partner.PartnerFunction as parvw_unv preserving type )` |
| `Customer` |  | |  |  |
| `Supplier` |  | |  |  |
| `Personnel` |  | |  |  |
| `AddressID` |  | |  |  |
| `ReferenceBusinessPartner` |  | |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |
| `AddressPersonID` |  | |  |  |
| `ContactPerson` |  | |  |  |
| `_BillingDocumentRequest` | | ✓ | | |
| `_Item` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocumentRequest` | `I_BillingDocumentRequest` | [1..1] |
| `_Item` | `I_BillingDocumentRequestItem` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Billing Document Request Item Partner'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),  
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDBDRQITPT',                
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
   representativeKey: 'PartnerFunction',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]      
}
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_BillingDocReqItemPartner as select from I_BillingDocItemPartnerBasic as Partner
    
    association[1..1] to I_BillingDocumentRequest     as _BillingDocumentRequest  on  $projection.BillingDocumentRequest          = _BillingDocumentRequest.BillingDocumentRequest
    association[1..1] to I_BillingDocumentRequestItem as _Item                      on  $projection.BillingDocumentRequest          = _Item.BillingDocumentRequest
                                                                                    and $projection.BillingDocumentRequestItem      = _Item.BillingDocumentRequestItem    
                                                                                                                                                                                
{
    @Consumption.valueHelpDefinition: [ 
      { entity:  { name:    'I_BillingDocumentRequestStdVH',
                   element: 'BillingDocumentRequest' }
      }]    
    @ObjectModel.foreignKey.association: '_BillingDocumentRequest'
    key cast( Partner.BillingDocument as vbeln_bdr preserving type ) as BillingDocumentRequest,
    
    @Consumption.valueHelpDefinition: [ 
      { entity:  { name:    'I_BillingDocReqItemStdVH',
                   element: 'BillingDocumentRequestItem' },
        additionalBinding: [{ localElement: 'BillingDocumentRequest',
                              element: 'BillingDocumentRequest' }]
      }]
    @ObjectModel.foreignKey.association: '_Item'                                                                                                   
    key cast( Partner.BillingDocumentItem as posnr_bdr preserving type ) as BillingDocumentRequestItem,                                                                                  
                                                 
    @ObjectModel.foreignKey.association: '_PartnerFunction'
    key cast(Partner.PartnerFunction as parvw_unv preserving type ) as PartnerFunction,    
    
    Partner.Customer,
    
    Partner.Supplier,
    
    Partner.Personnel,

    @ObjectModel.foreignKey.association: '_Address'
    Partner.AddressID,

    Partner.ReferenceBusinessPartner,
    Partner.BPRefAddressIDForDocSpcfcAddr,
    Partner.SDDocPartnerAddressRefType,
    Partner.AddressPersonID,
    
    Partner.ContactPerson,
    
    //Association
    @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]    
    _BillingDocumentRequest,
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]    
    _Item,
    Partner._PartnerFunction,
    Partner._Address,
    Partner._BusinessPartnerAddress,
    Partner._BPRefAddressForDocSpcfcAddr,
    Partner._DfltAddrRprstn    
}
where _BillingDocumentRequest.SDDocumentCategory = 'EBDR'
```
