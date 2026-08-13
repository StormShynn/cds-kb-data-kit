---
name: D_BDRCRTEFRMEXTPARTNERP
description: "D Bdrcrtefrmextpartnerp"
semantic_vi: "Chứa thông tin đối tác kinh doanh, bao gồm khách hàng, nhà cung cấp và thông tin liên hệ, cho việc sử dụng trong các quy trình kinh doanh bán hàng và phân phối."
keywords:
  - "sales"
  - "distribution"
  - "business partner"
  - "customer"
  - "supplier"
  - "contact"
  - "partner function"
  - "business partner address"
  - "contact person"
  - "personnel"
semantic_en: "Exposes business partner information, including customer, supplier, and contact details, for use in sales and distribution business processes."
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - partner
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# D_BDRCRTEFRMEXTPARTNERP

**D Bdrcrtefrmextpartnerp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
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
@EndUserText.label: 'Create BDR from Ext Data - Partner Param'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BDRCrteFrmExtPartnerP { 

  PartnerFunction               : parvw_unv;
  
  Customer                      : kunnr;

  BusinessPartnerAddressUUID    : bu_address_guid;
  
  ContactPerson                 : parnr;
  
  Personnel                     : pernr_d; 
  
  Supplier                      : lifnr;

}
```
