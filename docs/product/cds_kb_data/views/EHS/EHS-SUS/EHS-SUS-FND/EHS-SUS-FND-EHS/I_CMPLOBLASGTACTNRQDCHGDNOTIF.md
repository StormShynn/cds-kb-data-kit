---
name: I_CMPLOBLASGTACTNRQDCHGDNOTIF
description: "Action Required Changed Email Notif"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTACTNRQDCHGDNOTIF')/$value
semantic_en: "Action Required Changed Email Notif"
semantic_vi: "Action Required Changed Email Notif — CDS view giao diện (transactional data) dựa trên ehfndd_com_oblas."
keywords:
  - "action"
  - "required"
  - "changed"
  - "email"
  - "notif"
  - "sender"
  - "full"
  - "name"
  - "receiver"
  - "cmplnc"
  - "oblgn"
  - "assgmt"
  - "compliance"
  - "obligation"
  - "title"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_CMPLOBLASGTACTNRQDCHGDNOTIF

**Action Required Changed Email Notif**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTACTNRQDCHGDNOTIF')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SenderFullName` |  | |  | `cast('SAP System' as ehfnd_party_name )` | `CHAR(80)` | Full Name of Party |
| `EHSReceiverFullName` |  | |  | `cast('User' as ehfnd_party_name )` | `CHAR(80)` | Full Name of Party |
| `CmplncOblgnAssgmtURL` |  | |  | `cast('URL_ERROR' as ehfnd_text1333 )` | `CHAR(1333)` | Long Text (max) |
| `ComplianceObligationTitle` |  | |  | `cast('MISSING_OBLIGATION_TITLE' as ehfnd_com_obligation_title )` | `CHAR(255)` | Compliance Obligation Title |
| `EHSLocationName` |  | |  | `cast('MISSING_LOCATION_NAME' as ehfnd_loc_revision_text )` | `CHAR(60)` | Location Revision Text |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTACTNRQDCHGDNOTIF')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTACTNRQDCHGDNOTIF')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Action Required Changed Email Notif'
@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType:#BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ],
  modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
}

define view entity I_CmplOblAsgtActnRqdChgdNotif
  as select from ehfndd_com_oblas //Dummy table. Only syntactically needed, not really used. According to Email Tempalte API documentation
{

  cast('SAP System'               as ehfnd_party_name )           as SenderFullName,
  cast('User'                     as ehfnd_party_name )           as EHSReceiverFullName,
  cast('URL_ERROR'                as ehfnd_text1333 )             as CmplncOblgnAssgmtURL,
  cast('MISSING_OBLIGATION_TITLE' as ehfnd_com_obligation_title ) as ComplianceObligationTitle,
  cast('MISSING_LOCATION_NAME'    as ehfnd_loc_revision_text )    as EHSLocationName

}
```
