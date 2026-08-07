---
name: I_CUSTMGMTPARTNER
description: "Custmgmtpartner"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - partner
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_CUSTMGMTPARTNER

**Custmgmtpartner**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtObjectType` | ✓ | |  | `objtype_h` |  |  |
| `CustMgmtDocument` | ✓ | |  | `object_id` |  |  |
| `CustMgmtDocumentItem` | ✓ | |  | `number_int` |  |  |
| `CustMgmtPartnerFunction` | ✓ | |  | `partner_fct` |  |  |
| `CustMgmtPartner` | ✓ | |  | `partner_no` |  |  |
| `CustMgmtPartnerNumberType` | ✓ | |  | `no_type` |  |  |
| `CustMgmtPartFunctionCategory` |  | |  | `partner_pft` |  |  |
| `CustMgmtBusinessPartner` |  | |  | `partner_id` |  |  |
| `CustMgmtPartnerIsMainPartner` |  | |  | `mainpartner` |  |  |
| `AddressID` |  | |  | `addr_nr` |  |  |
| `AddressPersonID` |  | |  | `addr_np` |  |  |
| `AddressObjectType` |  | |  | `addr_type` |  |  |
| `_CustMgmtObjectType` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustMgmtObjectType` | `I_BusinessObjType` | [1..1] |
| `_PartnerFunction` | `I_CustMgmtPartnerFuncText` | [0..*] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm:#SESSION_VARIABLE
@EndUserText.label: 'Customer Management Partner'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AbapCatalog: {
  sqlViewName: 'ICUSTMGMTPARTNER',
  compiler.compareFilter: true
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Analytics: {
    dataExtraction: {
        enabled: true
        }
}
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
//! Business Object SONT for the Service Document Partner
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentPartner'

@Metadata.ignorePropagatedAnnotations: true

define view I_CustMgmtPartner
  as select from crms4d_partner

  association [1..1] to I_BusinessObjType         as _CustMgmtObjectType on $projection.CustMgmtObjectType = _CustMgmtObjectType.BusinessObjectType
  association [0..*] to I_CustMgmtPartnerFuncText as _PartnerFunction    on $projection.CustMgmtPartnerFunction = _PartnerFunction.PartnerFunction
  association [0..1] to I_BusinessPartner         as _BusinessPartner    on $projection.CustMgmtBusinessPartner = _BusinessPartner.BusinessPartner

{


  key objtype_h                                as CustMgmtObjectType,
  key object_id                                as CustMgmtDocument,
  key number_int                               as CustMgmtDocumentItem,
      @ObjectModel.text.association: '_PartnerFunction'
  key partner_fct                              as CustMgmtPartnerFunction,
  key partner_no                               as CustMgmtPartner,
  key no_type                                  as CustMgmtPartnerNumberType,

      partner_pft                              as CustMgmtPartFunctionCategory,
      partner_id                               as CustMgmtBusinessPartner,

      mainpartner                              as CustMgmtPartnerIsMainPartner,
      addr_nr                                  as AddressID,
      addr_np                                  as AddressPersonID,
      addr_type                                as AddressObjectType,

      //Association
      _CustMgmtObjectType,
      _PartnerFunction,
      _BusinessPartner
      

}
```
