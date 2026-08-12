---
name: I_IAMSUPPORTUSERREQUESTLOG
description: "Iamsupportuserrequestlog"
app_component: BC-SRV-APS-IAM
software_component: SAP_CLOUD
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-APS
  - interface-view
  - component:BC-SRV-APS-IAM
  - lob:Basis Components
---
# I_IAMSUPPORTUSERREQUESTLOG

**Iamsupportuserrequestlog**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-IAM` |
| Software Component | `SAP_CLOUD` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAMSupportUserRequestUUID` | ✓ | | `_SupportUserRequestLog` | `UUID` | `RAW(16)` | 16 Byte UUID in 16 Bytes (Raw Format) |
| `CAMSuppUserValdtyStartDateTime` |  | | `_SupportUserRequestLog` | `RequestedAt` | `DEC(21)` | IAM: Requested At |
| `CAMSupportUser` |  | | `_SupportUserRequestLog` | `Bname` | `CHAR(12)` | IAM: SAP Support User ID |
| `CAMSupportAccessLevel` |  | | `_SupportUserRequestLog` | `AccessLevelID` | `CHAR(22)` | IAM: Access Level ID |
| `CAMSupportAccessCategory` |  | | `_SupportUserRequestLog` | `AccessCategory` | `CHAR(10)` | IAM: Access Category |
| `CAMSupportAccessCategoryText` |  | | `_AccessCategory` | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `CAMSuppAddedAuthorizationMode` |  | | `_SupportUserRequestLog` | `AbaMode` | `CHAR(10)` | IAM: Additional Business Authorization Mode |
| `CAMSuppAddedAuthznModeText` |  | | `_AbaMode` | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `CAMSuppAddedAuthorizationUser` |  | | `_SupportUserRequestLog` | `AbaBname` | `CHAR(12)` | IAM: Additional Business Authorization User |
| `CAMSupportIncident` |  | | `_SupportUserRequestLog` | `IncidentID` | `CHAR(128)` | IAM: Incident ID |
| `CAMSupportIncidentSystem` |  | | `_SupportUserRequestLog` | `IncidentSystemType` | `CHAR(10)` | IAM: Incident System Type |
| `CAMSupportIncidentSystemText` |  | | `_IncidentSystemType` | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `CAMSupportIncidentSystemNumber` |  | | `_SupportUserRequestLog` | `IncidentSystemNumber` | `NUMC(10)` | IAM: Incident System Number |
| `CAMSupportIncidentTicketNumber` |  | | `_SupportUserRequestLog` | `IncidentNumber` | `CHAR(64)` | IAM: Incident Number |
| `CAMSupportIncidentTicketYear` |  | | `_SupportUserRequestLog` | `IncidentYear` | `NUMC(4)` | IAM: Incident Year |
| `CAMSuppUserValdtyEndDateTime` |  | | `_SupportUserRequestLog` | `ValidTo` | `DEC(15)` | IAM: Valid To |
| `_SupportUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupportUser` | `I_User` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Support User Request Log'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.privilegedAssociations: [ '_SupportUser' ]

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #A,
  sizeCategory: #S
}

// The following components of the underlying private view are not exposed in the consumption view:
// RequestedBy: SAP internal technical users for automated system operation
// RequestId: is always empty
// AccessType: SAP internal fixed values used in P_ view to calculate AccessCategory
// IncidentSrc: SAP internal source data used in CL_APS_IAM_SUSR_INC_PARSER to determine IncidentType
// IncidentType: SAP internal classification used in P_ view to calculate AccessCategory

define view entity I_IAMSupportUserRequestLog
  as select from    P_IAMSUPPORTUSERLOG as _SupportUserRequestLog

  // Texts for Access Categories
    left outer join dd07t               as _AccessCategory     on  _AccessCategory.domname    = 'APS_IAM_SUSR_ACCESS_CATEGORY'
                                                               and _AccessCategory.domvalue_l = _SupportUserRequestLog.AccessCategory
                                                               and _AccessCategory.ddlanguage = $session.system_language

  // Texts for Additional Business Authorization Modes
    left outer join dd07t               as _AbaMode            on  _AbaMode.domname    = 'APS_IAM_SUSR_ABA_MODE'
                                                               and _AbaMode.domvalue_l = _SupportUserRequestLog.AbaMode
                                                               and _AbaMode.ddlanguage = $session.system_language

  // Texts for Incident System Types
    left outer join dd07t               as _IncidentSystemType on  _IncidentSystemType.domname    = 'APS_IAM_SUSR_INCIDENT_SYS_TYPE'
                                                               and _IncidentSystemType.domvalue_l = _SupportUserRequestLog.IncidentSystemType
                                                               and _IncidentSystemType.ddlanguage = $session.system_language

  association [0..1] to I_User as _SupportUser on $projection.CAMSupportUser = _SupportUser.UserID

{
  key _SupportUserRequestLog.UUID                 as CAMSupportUserRequestUUID,
      _SupportUserRequestLog.RequestedAt          as CAMSuppUserValdtyStartDateTime,
      _SupportUserRequestLog.Bname                as CAMSupportUser,
      _SupportUserRequestLog.AccessLevelID        as CAMSupportAccessLevel,
      _SupportUserRequestLog.AccessCategory       as CAMSupportAccessCategory,
      _AccessCategory.ddtext                      as CAMSupportAccessCategoryText,
      _SupportUserRequestLog.AbaMode              as CAMSuppAddedAuthorizationMode,
      _AbaMode.ddtext                             as CAMSuppAddedAuthznModeText,
      _SupportUserRequestLog.AbaBname             as CAMSuppAddedAuthorizationUser,
      _SupportUserRequestLog.IncidentID           as CAMSupportIncident,
      _SupportUserRequestLog.IncidentSystemType   as CAMSupportIncidentSystem,
      _IncidentSystemType.ddtext                  as CAMSupportIncidentSystemText,
      _SupportUserRequestLog.IncidentSystemNumber as CAMSupportIncidentSystemNumber,
      _SupportUserRequestLog.IncidentNumber       as CAMSupportIncidentTicketNumber,
      _SupportUserRequestLog.IncidentYear         as CAMSupportIncidentTicketYear,
      _SupportUserRequestLog.ValidTo              as CAMSuppUserValdtyEndDateTime,
      _SupportUser
}
where
  // This person related data is provided for the purpose of auditing support access before financial year end closing.
  // Log entries older than 366 days are not returned.
      tstmp_is_valid( _SupportUserRequestLog.ValidTo ) =  1
  and tstmp_seconds_between(
        _SupportUserRequestLog.ValidTo, tstmp_current_utctimestamp(), 'FAIL'
      )                                                <= 31622400
```
