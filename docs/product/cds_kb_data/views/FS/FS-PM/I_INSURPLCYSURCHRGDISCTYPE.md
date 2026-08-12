---
name: I_INSURPLCYSURCHRGDISCTYPE
description: "Type Id for Surchrg Disc in Insur Plcy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYSURCHRGDISCTYPE')/$value
semantic_en: "Type Id for Surchrg Disc in Insur Plcy"
semantic_vi: "Type Id for Surchrg Disc in Insur Plcy — CDS view cơ bản dựa trên dd07l."
keywords:
  - "type"
  - "for"
  - "surchrg"
  - "disc"
  - "insur"
  - "plcy"
  - "surcharge"
  - "domain"
  - "value"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYSURCHRGDISCTYPE

**Type Id for Surchrg Disc in Insur Plcy**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYSURCHRGDISCTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurPlcySurchargeDiscTypeID` | ✓ | |  | `cast( dd07l.domvalue_l as /pm0/abu_spdctp_id )` | `NUMC(3)` | Surcharge / Discount Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYSURCHRGDISCTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYSURCHRGDISCTYPE')/$value)*

```abap
@EndUserText.label: 'Type Id for Surchrg Disc in Insur Plcy'
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IPDiscType'
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'InsurPlcySurchargeDiscTypeID',
  sapObjectNodeType.name: 'InsurPlcySurchargeDiscountType',
  resultSet.sizeCategory: #XS,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  usageType.sizeCategory: #S,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@Search.searchable: true

define root view entity I_InsurPlcySurchrgDiscType
  as select from dd07l
  composition [0..*] of I_InsurPlcySurchrgDiscTypeT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as /pm0/abu_spdctp_id ) as InsurPlcySurchargeDiscTypeID,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                               as DomainValue,

      _Text
}
where
      dd07l.domname  = '/PM0/ABU_SPDCTP_ID'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
