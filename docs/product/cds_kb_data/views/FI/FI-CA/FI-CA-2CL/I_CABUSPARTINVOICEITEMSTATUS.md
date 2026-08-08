---
name: I_CABUSPARTINVOICEITEMSTATUS
description: "CABusiness PartnerINVOICEITEMSTATUS"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - business-partner
  - status
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CABUSPARTINVOICEITEMSTATUS

**CABusiness PartnerINVOICEITEMSTATUS**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABusPartnerInvoiceItemStatus` | ✓ | |  | `cast( left( dd07l.domvalue_l,2 ) as inv_item_status_dc_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABusPartInvoiceItemStatusT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Partner Invoice Item Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusPartnerInvoiceItemStatus',
                sapObjectNodeType.name: 'ContrAcctgBusPrtnInvcItemSts',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusPartInvoiceItemStatus
  as select from dd07l
  
  association [1..*] to I_CABusPartInvoiceItemStatusT as _Text on $projection.CABusPartnerInvoiceItemStatus = _Text.CABusPartnerInvoiceItemStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l,2 ) as inv_item_status_dc_kk preserving type ) as CABusPartnerInvoiceItemStatus,

      //associations
      _Text

}
where
      domname  = 'INV_ITEM_STATUS_DC_KK'
  and as4local = 'A'
```
