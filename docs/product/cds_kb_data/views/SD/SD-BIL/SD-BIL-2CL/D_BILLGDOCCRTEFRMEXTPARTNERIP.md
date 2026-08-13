---
name: D_BILLGDOCCRTEFRMEXTPARTNERIP
description: "D Billgdoccrtefrmextpartnerip"
semantic_vi: "Chứa thông tin đối tác kinh doanh cho hóa đơn, bao gồm thông tin khách hàng và nhà cung cấp. View này hữu ích khi cần lấy thông tin đối tác trong quá trình kinh doanh hóa đơn."
keywords:
  - "partner"
  - "billing"
  - "customer"
  - "supplier"
  - "business partner"
  - "đối tác kinh doanh"
  - "hóa đơn"
  - "khách hàng"
  - "nhà cung cấp"
semantic_en: "Exposes business partner information for billing documents, including customer and supplier details. This view is useful for retrieving partner data in billing-related business processes."
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - partner
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTEFRMEXTPARTNERIP

**D Billgdoccrtefrmextpartnerip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PartnerFunction` |  | |  | `parvw_unv` |  |  |
| `Customer` |  | |  | `kunnr` |  |  |
| `BusinessPartnerAddressUUID` |  | |  | `bu_address_guid` |  |  |
| `ContactPerson` |  | |  | `parnr` |  |  |
| `Personnel` |  | |  | `pernr_d` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Bill Doc Create From Ext Data Partner - Parameter'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BillgDocCrteFrmExtPartnerIP
{
  PartnerFunction            : parvw_unv;

  Customer                   : kunnr;

  BusinessPartnerAddressUUID : bu_address_guid;

  ContactPerson              : parnr;

  Personnel                  : pernr_d;

  Supplier                   : lifnr;

}
```
