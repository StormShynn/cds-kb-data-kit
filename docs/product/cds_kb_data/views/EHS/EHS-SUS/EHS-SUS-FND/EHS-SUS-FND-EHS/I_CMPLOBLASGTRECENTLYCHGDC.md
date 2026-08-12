---
name: I_CMPLOBLASGTRECENTLYCHGDC
description: "Recently Chgd Obl Assignments - Cube"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTRECENTLYCHGDC')/$value
semantic_en: "Recently Chgd Obl Assignments - Cube"
semantic_vi: "Recently Chgd Obl Assignments - Cube — CDS view giao diện dựa trên I_CmplncObligationAssignment."
keywords:
  - "recently"
  - "chgd"
  - "obl"
  - "assignments"
  - "cube"
  - "cmplnc"
  - "obligation"
  - "assignment"
  - "compliance"
  - "location"
  - "name"
  - "oblgn"
  - "assgmt"
  - "status"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_CMPLOBLASGTRECENTLYCHGDC

**Recently Chgd Obl Assignments - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTRECENTLYCHGDC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` | ✓ | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceObligationUUID` |  | |  |  | `RAW(16)` | Compliance Obligation |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | | `_EHSLocNameFallbackLanguage` | `EHSLocationName` | `CHAR(60)` | Location Revision Text |
| `CmplncOblgnAssgmtCmplncStatus` |  | |  |  | `CHAR(2)` | Status |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Is Deleted |
| `ComplianceOblgnAssgmtActnRqd` |  | |  |  | `CHAR(2)` | Action Required |
| `ComplianceObligationDomainCode` |  | | `_ObligationDomain` | `ComplianceObligationDomainCode` | `CHAR(21)` | Compliance Obligation Domain |
| `ComplianceObligationTypeCode` |  | | `_ComplianceObligation` | `ComplianceObligationTypeCode` | `CHAR(2)` | Compliance Obligation Type |
| `LastChangedDate` |  | |  | `cast ( tstmp_to_dats( LastChangeUTCDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as ehfnd_last_changed_date )` | `DATS(8)` | Last Changed Date |
| `LastChangeUTCDateTime` |  | |  |  | `DEC(21)` | Last Change Date Time |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ObligationDomain` | `I_ComplianceObligationDomain` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTRECENTLYCHGDC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTRECENTLYCHGDC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Recently Chgd Obl Assignments - Cube'
@Analytics: { dataCategory:#CUBE, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{ serviceQuality: #D,
                         sizeCategory:  #L,
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true

define view entity I_CmplOblAsgtRecentlyChgdC

  as select from I_CmplncObligationAssignment as CmplncObligation
  association [0..*] to I_ComplianceObligationDomain as _ObligationDomain on $projection.ComplianceObligationUUID = _ObligationDomain.ComplianceObligationUUID

{
  key CmplncObligationAssignmentUUID,
      ComplianceObligationUUID,

      @ObjectModel.text.element: [ 'EHSLocationName' ]
      EHSLocationUUID,

      @Semantics.text: true
      _EHSLocNameFallbackLanguage.EHSLocationName as EHSLocationName,

      @ObjectModel.text.element: ['CmplncOblgnAssgmtCmplncStsText']
      CmplncOblgnAssgmtCmplncStatus,
      
      @Semantics.text: true
      _CmplOblAsgtCmplncStatus._Text[1: Language = $session.system_language].CmplncOblgnAssgmtCmplncStsText,      
      
      IsDeleted,
      
      ComplianceOblgnAssgmtActnRqd,
    
      _ObligationDomain.ComplianceObligationDomainCode,

      _ComplianceObligation.ComplianceObligationTypeCode,

      _ComplianceObligation._ComplianceObligationText[1: Language = $session.system_language].ComplianceObligationTitle,
      
      cast ( tstmp_to_dats( LastChangeUTCDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as  ehfnd_last_changed_date )   as LastChangedDate,

      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeUTCDateTime
}
where
  dats_add_months( tstmp_to_dats( LastChangeUTCDateTime,
                                  abap_system_timezone( $session.client,'NULL' ),
                                  $session.client,
                                  'FAIL' ), 
                   3, 
                   'NULL') >= $session.system_date
```
