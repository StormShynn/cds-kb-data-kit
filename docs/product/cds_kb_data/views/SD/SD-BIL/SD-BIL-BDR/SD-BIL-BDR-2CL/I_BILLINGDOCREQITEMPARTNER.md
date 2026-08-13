---
name: I_BILLINGDOCREQITEMPARTNER
description: "Billing DocumentREQITEMPARTNER"
semantic_vi: "View I_BILLINGDOCREQITEMPARTNER hiển thị thông tin đối tác tại mức độ chi tiết của yêu cầu hóa đơn, được sử dụng để quản lý mối quan hệ đối tác trong hóa đơn."
keywords:
  - "billing document"
  - "đơn hóa đơn"
  - "partner"
  - "đối tác"
  - "billing document request"
  - "yêu cầu hóa đơn"
  - "item-level"
  - "mức độ chi tiết"
  - "sap"
  - "sd-bil-bdr-2cl"
semantic_en: "The Billing Document Request Item Partner view exposes billing document request item-level partner information, which is used to manage partner relationships in billing documents."
app_component: SD-BIL-BDR-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentRequest` | ✓ | |  | `cast( Partner.BillingDocument as vbeln_bdr preserving type )` |  |  |
| `BillingDocumentRequestItem` | ✓ | |  | `cast( Partner.BillingDocumentItem as posnr_bdr preserving type )` |  |  |
| `PartnerFunction` | ✓ | |  | `cast(Partner.PartnerFunction as parvw_unv preserving type )` |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `_BillingDocumentRequest` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |

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
