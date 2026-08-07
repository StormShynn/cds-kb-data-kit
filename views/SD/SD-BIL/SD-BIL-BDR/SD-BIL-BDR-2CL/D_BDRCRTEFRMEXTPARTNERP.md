---
name: D_BDRCRTEFRMEXTPARTNERP
description: "D Bdrcrtefrmextpartnerp"
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
