---
name: I_COLLTRLREPARTPARTNER
description: "Business Partner for Collateral RE Part"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTPARTNER')/$value
semantic_en: "Business Partner for Collateral RE Part"
semantic_vi: "Business Partner for Collateral RE Part — CDS view giao diện dựa trên cms_re_prt_bp."
keywords:
  - "business"
  - "partner"
  - "for"
  - "collateral"
  - "part"
  - "colltrl"
  - "real"
  - "estate"
  - "function"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - bo:businesspartner
---
# I_COLLTRLREPARTPARTNER

**Business Partner for Collateral RE Part**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlREPartPartnerUUID` | ✓ | |  | `prt_bp_guid` | `RAW(16)` | GUID for part BP |
| `CollateralRealEstatePartUUID` |  | |  | `obj_prt_guid` | `RAW(16)` | GUID for Object part |
| `CollateralRealEstatePartID` |  | |  | `part_id` | `NUMC(10)` | Part ID for the Object |
| `CollateralRealEstatePartnerID` |  | |  | `cast( bupa_id as cms_dte_bpid_vdm preserving type )` | `CHAR(32)` | Business Partner ID |
| `CollateralPartnerFunction` |  | |  | `bpf` | `CHAR(6)` | Business Partner Function |
| `ColltrlREPartnerShareNumerator` |  | |  | `bupa_share_nr` | `INT4(10)` | Numerator of the Business Partner Ownership of Real Estate |
| `ColltrlREPrtnShareDenominator` |  | |  | `bupa_share_dr` | `INT4(10)` | Denominator of Business Partner Ownership of Real Estate |
| `ColltrlREPartnerValidFromDate` |  | |  | `bp_valid_from` | `DATS(8)` | Date from which Real Estate Value stands Valid |
| `ColltrlREPartnerValidToDate` |  | |  | `bp_valid_to` | `DATS(8)` | Date unitl which Real Estate Value stands Valid |
| `ColltrlRealEstateEnteredDate` |  | |  | `created_date` | `DATS(8)` | Created On |
| `_CollateralRealEstatePart` | | ✓ | | | | |
| `_ColltrlREPartMaster` | | ✓ | | | | |
| `_ColltrlREPartAccessory` | | ✓ | | | | |
| `_ColltrlREPartAccessoryMaster` | | ✓ | | | | |
| `_CollateralRealEstatePartCost` | | ✓ | | | | |
| `_ColltrlREPartValue` | | ✓ | | | | |
| `_ColltrlRELandRegister` | | ✓ | | | | |
| `_CollateralPartnerFunction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralRealEstatePart` | `I_CollateralRealEstatePart` | [0..1] |
| `_ColltrlREPartMaster` | `I_ColltrlREPartMaster` | [0..1] |
| `_ColltrlREPartAccessory` | `I_ColltrlREPartAccessory` | [0..*] |
| `_ColltrlREPartAccessoryMaster` | `I_ColltrlREPartAccessoryMaster` | [0..*] |
| `_CollateralRealEstatePartCost` | `I_CollateralRealEstatePartCost` | [0..*] |
| `_ColltrlREPartValue` | `I_ColltrlREPartValue` | [0..*] |
| `_ColltrlRELandRegister` | `I_ColltrlRELandRegister` | [0..*] |
| `_CollateralPartnerFunction` | `I_CollateralPartnerFunction` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTPARTNER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTPARTNER')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREPARTBP',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    representativeKey: 'ColltrlREPartPartnerUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Business Partner for Collateral RE Part'
define view I_ColltrlREPartPartner
  as select from cms_re_prt_bp
  association [0..1] to I_CollateralRealEstatePart           as _CollateralRealEstatePart      on $projection.CollateralRealEstatePartUUID = _CollateralRealEstatePart.CollateralRealEstatePartUUID
  association [0..1] to I_ColltrlREPartMaster                as _ColltrlREPartMaster           on $projection.CollateralRealEstatePartUUID = _ColltrlREPartMaster.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartAccessory             as _ColltrlREPartAccessory        on $projection.CollateralRealEstatePartUUID = _ColltrlREPartAccessory.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartAccessoryMaster       as _ColltrlREPartAccessoryMaster  on $projection.CollateralRealEstatePartUUID = _ColltrlREPartAccessoryMaster.CollateralRealEstatePartUUID
  association [0..*] to I_CollateralRealEstatePartCost       as _CollateralRealEstatePartCost  on $projection.CollateralRealEstatePartUUID = _CollateralRealEstatePartCost.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartValue                 as _ColltrlREPartValue            on $projection.CollateralRealEstatePartUUID = _ColltrlREPartValue.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlRELandRegister              as _ColltrlRELandRegister         on $projection.CollateralRealEstatePartUUID = _ColltrlRELandRegister.CollateralRealEstatePartUUID
  association [0..1] to I_CollateralPartnerFunction          as _CollateralPartnerFunction     on $projection.CollateralPartnerFunction = _CollateralPartnerFunction.CollateralPartnerFunction
{
  key prt_bp_guid                                         as ColltrlREPartPartnerUUID,
      obj_prt_guid                                        as CollateralRealEstatePartUUID,
      part_id                                             as CollateralRealEstatePartID,
      cast( bupa_id as cms_dte_bpid_vdm preserving type ) as CollateralRealEstatePartnerID,
      @ObjectModel.foreignKey.association: '_CollateralPartnerFunction'
      bpf                                                 as CollateralPartnerFunction,
      bupa_share_nr                                       as ColltrlREPartnerShareNumerator,
      bupa_share_dr                                       as ColltrlREPrtnShareDenominator,
      bp_valid_from                                       as ColltrlREPartnerValidFromDate,
      bp_valid_to                                         as ColltrlREPartnerValidToDate,
      created_date                                        as ColltrlRealEstateEnteredDate,

      _CollateralRealEstatePart,
      _ColltrlREPartMaster,
      _ColltrlREPartAccessory,
      _ColltrlREPartAccessoryMaster,
      _CollateralRealEstatePartCost,
      _ColltrlREPartValue,
      _ColltrlRELandRegister,
      _CollateralPartnerFunction
}
```
