---
name: I_INVOICELISTPARTNER
description: "Invoicelistpartner"
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IL
  - interface-view
  - partner
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
---
# I_INVOICELISTPARTNER

**Invoicelistpartner**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoiceList` | ✓ | |  | `cast(Partner.BillingDocument as vbeln_rl preserving type)` |  |  |
| `PartnerFunction` | ✓ | |  | `cast(Partner.PartnerFunction as parvw_unv preserving type )` |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |  |  |
| `_InvoiceList` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InvoiceList` | `I_InvoiceList` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: [ '_Address', '_DfltAddrRprstn' ]

@Analytics.technicalName: 'ISDINVOICELISTPT'

@EndUserText.label: 'Invoice List Partner'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'PartnerFunction'
@ObjectModel.sapObjectNodeType.name: 'InvoiceListPartner'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #B, sizeCategory: #XL }

@VDM.viewType: #COMPOSITE

define view entity I_InvoiceListPartner
  as select from I_BillingDocumentPartnerBasic as Partner

  association [1..1] to I_InvoiceList as _InvoiceList on $projection.InvoiceList = _InvoiceList.InvoiceList

{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InvoiceListStdVH', element: 'InvoiceList' } } ]
      @ObjectModel.foreignKey.association: '_InvoiceList'
  key cast(Partner.BillingDocument as vbeln_rl preserving type) as InvoiceList,

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
      Partner.BPRefAddressIDForDocSpcfcAddr,
      Partner.SDDocPartnerAddressRefType,

      // Association
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _InvoiceList,

      /* start suppress warning calculated_field_check */
      Partner._PartnerFunction,
      /* end suppress warning calculated_field_check */

      Partner._Address,
      Partner._DfltAddrRprstn,
      Partner._BusinessPartnerAddress,
      Partner._BPRefAddressForDocSpcfcAddr
}

where _InvoiceList.SDDocumentCategory = '3' or _InvoiceList.SDDocumentCategory = '4'
```
