---
name: I_BILLINGDOCREQPARTNER
description: "Billing DocumentREQPARTNER"
semantic_vi: "View I_BILLINGDOCREQPARTNER hiển thị dữ liệu kinh doanh liên quan đến yêu cầu hóa đơn và đối tác của hóa đơn, hữu ích khi quản lý yêu cầu hóa đơn và thông tin đối tác tương ứng."
keywords:
  - "billing document request"
  - "partner"
  - "billing document"
  - "đối tác hóa đơn"
  - "yêu cầu hóa đơn"
  - "hóa đơn"
  - "partner function"
  - "customer"
  - "supplier"
  - "personnel"
  - "address"
  - "contact person"
semantic_en: "The Billing Document Request Partner view exposes business data related to billing document requests and their associated partners, useful when managing billing document requests and their corresponding partner information."
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
  - partner
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLINGDOCREQPARTNER

**Billing DocumentREQPARTNER**

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
| `PartnerFunction` | ✓ | |  | `cast(Partner.PartnerFunction as parvw_unv preserving type )` |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |  |  |
| `_BillingDocumentRequest` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocumentRequest` | `I_BillingDocumentRequest` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Billing Document Request Partner'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),  
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDBDRQPT',
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

define view I_BillingDocReqPartner as select from I_BillingDocumentPartnerBasic as Partner
    
    association[1..1] to I_BillingDocumentRequest     as _BillingDocumentRequest          on  $projection.BillingDocumentRequest          = _BillingDocumentRequest.BillingDocumentRequest
               
{
    @Consumption.valueHelpDefinition: [ 
      { entity:  { name:    'I_BillingDocumentRequestStdVH',
                   element: 'BillingDocumentRequest' }
      }]                                         
    @ObjectModel.foreignKey.association: '_BillingDocumentRequest'
    key cast( Partner.BillingDocument as vbeln_bdr preserving type ) as BillingDocumentRequest,
                                                                                                   
    @ObjectModel.foreignKey.association: '_PartnerFunction'
    key cast(Partner.PartnerFunction as parvw_unv preserving type ) as PartnerFunction,    
    
    Partner.Customer,
    
    Partner.Supplier,
    
    Partner.Personnel,

    @ObjectModel.foreignKey.association: '_Address'
    Partner.AddressID,
    
    Partner.ContactPerson,
    
    Partner.AddressPersonID,
    Partner.ReferenceBusinessPartner,
    Partner.SDDocPartnerAddressRefType,
    Partner.BPRefAddressIDForDocSpcfcAddr,
    
    //Association
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]    
    _BillingDocumentRequest,
    Partner._PartnerFunction,
    Partner._Address,
    Partner._BusinessPartnerAddress,
    Partner._BPRefAddressForDocSpcfcAddr,  
    Partner._DfltAddrRprstn    
}
where _BillingDocumentRequest.SDDocumentCategory = 'EBDR'
```
