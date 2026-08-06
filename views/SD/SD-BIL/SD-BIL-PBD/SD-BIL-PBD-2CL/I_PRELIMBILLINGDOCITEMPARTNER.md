---
name: I_PRELIMBILLINGDOCITEMPARTNER
description: PRELIMBilling DocumentITEMPARTNER
app_component: SD-BIL-PBD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-PBD
  - interface-view
  - billing-document
  - billing
  - item-level
  - partner
  - component:SD-BIL-PBD-2CL
  - lob:Sales & Distribution
---
# I_PRELIMBILLINGDOCITEMPARTNER

**PRELIMBilling DocumentITEMPARTNER**

| Property | Value |
|---|---|
| App Component | `SD-BIL-PBD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PrelimBillingDocument` | `cast( Partner.BillingDocument as prelim_billing_document preserving type )` |
| `PrelimBillingDocumentItem` | `}] key cast( Partner.BillingDocumentItem as prelim_billing_document_item preserving type )` |
| key `PartnerFunction` | `cast(Partner.PartnerFunction as parvw_unv preserving type )` |
| `Customer` | `Partner.Customer` |
| `Supplier` | `Partner.Supplier` |
| `Personnel` | `Partner.Personnel` |
| `AddressID` | `Partner.AddressID` |
| `ContactPerson` | `Partner.ContactPerson` |
| `AddressPersonID` | `Partner.AddressPersonID` |
| `_PrelimBillingDocument` | *Association* |
| `_Item` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrelimBillingDocument` | `I_PrelimBillingDocument` | [1..1] |
| `_Item` | `I_PrelimBillingDocumentItem` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Preliminary Billing Document Item Partner'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),  
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDPREBILDOCITPT',
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

define view I_PrelimBillingDocItemPartner as select from I_BillingDocItemPartnerBasic as Partner
    
    association[1..1] to I_PrelimBillingDocument     as _PrelimBillingDocument          on  $projection.PrelimBillingDocument          = _PrelimBillingDocument.PrelimBillingDocument
    association[1..1] to I_PrelimBillingDocumentItem as _Item                           on  $projection.PrelimBillingDocument          = _Item.PrelimBillingDocument
                                                                                        and $projection.PrelimBillingDocumentItem      = _Item.PrelimBillingDocumentItem    
                                                                                                                                                                                                                                                                  
{
    @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_PrelimBillingDocumentStdVH',
                     element: 'PrelimBillingDocument' }
        }]   
    @ObjectModel.foreignKey.association: '_PrelimBillingDocument'
    key cast( Partner.BillingDocument as prelim_billing_document preserving type ) as PrelimBillingDocument,
    
    @Consumption.valueHelpDefinition: [ 
      { entity:  { name:    'I_PrelimBillingDocItemStdVH',
                   element: 'PrelimBillingDocumentItem' },
        additionalBinding: [{ localElement: 'PrelimBillingDocument',
                              element: 'PrelimBillingDocument' }]
      }]
    @ObjectModel.foreignKey.association: '_Item'                                                                                                   
    key cast( Partner.BillingDocumentItem as prelim_billing_document_item preserving type ) as PrelimBillingDocumentItem,                                                                                  
                                                 
    @ObjectModel.foreignKey.association: '_PartnerFunction'
    key cast(Partner.PartnerFunction as parvw_unv preserving type ) as PartnerFunction,    
    
    Partner.Customer,
    
    Partner.Supplier,
    
    Partner.Personnel,

    @ObjectModel.foreignKey.association: '_Address'
    Partner.AddressID,
    
    Partner.ContactPerson,
    
    Partner.AddressPersonID,
        
    //Association
    @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]    
    _PrelimBillingDocument,
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]    
    _Item,
    Partner._PartnerFunction,
    Partner._Address,    
    Partner._DfltAddrRprstn     
}
where _PrelimBillingDocument.SDDocumentCategory = 'PBD'
```
