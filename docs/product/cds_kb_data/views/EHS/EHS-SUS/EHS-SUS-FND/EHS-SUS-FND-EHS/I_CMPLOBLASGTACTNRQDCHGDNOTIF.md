---
name: I_CMPLOBLASGTACTNRQDCHGDNOTIF
description: "Action Required Changed Email Notif"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
