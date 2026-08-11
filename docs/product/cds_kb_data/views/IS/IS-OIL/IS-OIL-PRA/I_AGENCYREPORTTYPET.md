---
name: I_AGENCYREPORTTYPET
description: "Agency Report Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYREPORTTYPET')/$value
semantic_en: "Agency Report Type - Text"
semantic_vi: "Agency Report Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "agency"
  - "report"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_AGENCYREPORTTYPET

**Agency Report Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYREPORTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgencyReportType` | ✓ | |  | `cast (domvalue_l as oiue2_ac_ind )` | `CHAR(1)` | Proc 2.0 - Amended/Current Indicator |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `AgencyReportTypeName` |  | |  | `cast (ddtext as oiu_vdm_agency_rep_type )` | `CHAR(60)` | Agency Report Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYREPORTTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGENCYREPORTTYPET')/$value)*

```abap
@EndUserText.label: 'Agency Report Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVAGENCYREPTYT'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ObjectModel.representativeKey: 'AgencyReportType'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@Metadata.ignorePropagatedAnnotations:true

define view I_AgencyReportTypeT
  as select from dd07t
{
  key cast (domvalue_l as oiue2_ac_ind )                             as AgencyReportType,
      @Semantics.language
  key cast( ddlanguage as spras )                                    as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_agency_rep_type )                      as AgencyReportTypeName
}
where
      domname  = 'OIUE2_AC_IND'
  and as4local = 'A';
```
