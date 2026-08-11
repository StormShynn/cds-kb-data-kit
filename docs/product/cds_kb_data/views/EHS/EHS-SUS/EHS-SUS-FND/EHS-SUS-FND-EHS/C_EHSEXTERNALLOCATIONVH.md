---
name: C_EHSEXTERNALLOCATIONVH
description: "This CDS view provides value help for EHS (Environment, Health, and Safety) locations. You can use this view to search and select EHS locations by their UUID when working with EHS-related applications and processes. The view filters location data to show only currently valid revisions based on the system date and presents location names with fallback language support for multilingual environments. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSEXTERNALLOCATIONVH')/$value
semantic_en: "This CDS view provides value help for EHS (Environment, Health, and Safety) locations. You can use this view to search and select EHS locations by their UUID when working with EHS-related applications and processes. The view filters location data to show only currently valid revisions based on the system date and presents location names with fallback language support for multilingual environments. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location — CDS view tiêu dùng dựa trên EHS Location."
keywords:
  - "ehs"
  - "location"
  - "name"
  - "free"
  - "srch"
  - "authorization"
  - "group"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
---
# C_EHSEXTERNALLOCATIONVH

**This CDS view provides value help for EHS (Environment, Health, and Safety) locations. You can use this view to search and select EHS locations by their UUID when working with EHS-related applications and processes. The view filters location data to show only currently valid revisions based on the system date and presents location names with fallback language support for multilingual environments. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSEXTERNALLOCATIONVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` | ✓ | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  | `cast( _LocTextDesc.EHSLocationName as ehfnd_loc_name preserving type )` | `CHAR(60)` | Location |
| `EHSLocationNameFreeSrch` |  | | `_LocTextDesc._LocationNameText` | `EHSLocationName` | `CHAR(60)` | Location |
| `EHSLocationAuthorizationGroup` |  | |  | `cast(_EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationAuthorizationGroup as char21 )` | `CHAR(21)` | Field Name |
| `_EHSLocationRevision` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LocTextDesc` | `I_LocationDescFallbackLang` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSEXTERNALLOCATIONVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSEXTERNALLOCATIONVH')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EHS Location'

@VDM.viewType: #CONSUMPTION

@ObjectModel: { representativeKey: 'EHSLocationUUID',
                dataCategory: #VALUE_HELP,
                usageType: { serviceQuality: #C,
                             sizeCategory:   #M,
                             dataClass:      #MASTER }
              }
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#VALUE_HELP_PROVIDER]
// This simplified value help will be used for C1 contract exposure only

define view entity C_EHSExternalLocationVH
  as select distinct from I_EHSLocationRoot
  association [1..1] to I_LocationDescFallbackLang as _LocTextDesc on $projection.EHSLocationUUID = _LocTextDesc.EHSLocationUUID

{

      @UI.hidden: true
      @ObjectModel.text.element: ['EHSLocationNameFreeSrch'] // Suggested Values work with visible fields (EHSLocationName is hidden by default )
  key EHSLocationUUID,

      @UI.hidden: true
      @Semantics.text: true
      @Consumption.filter.hidden: true
      cast( _LocTextDesc.EHSLocationName as ehfnd_loc_name preserving type )                                                                                        as EHSLocationName,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.75
      @Search.ranking: #HIGH
      @Semantics.text: true
      @UI.selectionField: [{ position: 10 }]
      // we do not use directly _LocTextDesc.EhsLocationName because we got an error "Feature not supported, cannot search via calculated field"
      // when trying to search in location value help in our fiori apps
      // we use this field in ON condition association to  I_EHSLocationRevisionNameT in I_LocationDescFallbackLang to filter out and get
      // only one record for EHSLocation name
      _LocTextDesc._LocationNameText.EHSLocationName                                                                                                                as EHSLocationNameFreeSrch,

      @UI.hidden: true
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date ].EHSLocationType,
      @UI.hidden: true
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationStatus,
      @UI.hidden: true
      cast(_EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationAuthorizationGroup as char21 ) as EHSLocationAuthorizationGroup,
      @UI.hidden: true
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].Plant,
      @UI.hidden: true
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].CostCenter,
      @UI.hidden: true
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].CompanyCode,
      @UI.hidden: true
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].BusinessArea,
      @UI.hidden: true
      _EHSLocationRevision
}
```
