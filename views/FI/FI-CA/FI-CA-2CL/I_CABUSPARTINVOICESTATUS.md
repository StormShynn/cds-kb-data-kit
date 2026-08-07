---
name: I_CABUSPARTINVOICESTATUS
description: CABusiness PartnerINVOICESTATUS
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CABUSPARTINVOICESTATUS

**CABusiness PartnerINVOICESTATUS**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CABusPartnerInvoiceStatus` | ✓ | |  | `cast( left( dd07l.domvalue_l,2 ) as inv_status_dc_kk preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABusPartInvoiceStatusText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Partner Invoice Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABusPartnerInvoiceStatus',
                sapObjectNodeType.name: 'ContrAcctgBusPrtnInvoiceStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusPartInvoiceStatus
  as select from dd07l

  association [1..*] to I_CABusPartInvoiceStatusText as _Text on $projection.CABusPartnerInvoiceStatus = _Text.CABusPartnerInvoiceStatus

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l,2 ) as inv_status_dc_kk preserving type ) as CABusPartnerInvoiceStatus,

      //associations
      _Text

}
where
      domname  = 'INV_STATUS_DC_KK'
  and as4local = 'A'
```
