---
name: I_MBLCOMMSERVERDETAILS
description: "Mobile Application Middleware Server"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLCOMMSERVERDETAILS')/$value
semantic_en: "Mobile Application Middleware Server"
semantic_vi: "Mobile Application Middleware Server — CDS view giao diện dựa trên Mobile Application Middleware Server."
keywords:
  - "mobile"
  - "application"
  - "middleware"
  - "server"
  - "user"
  - "session"
  - "comm"
  - "name"
  - "domain"
  - "target"
  - "host"
  - "serial"
  - "number"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# I_MBLCOMMSERVERDETAILS

**Mobile Application Middleware Server**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLCOMMSERVERDETAILS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserSessionServer` | ✓ | |  | `server_guid` | `CHAR(32)` | Middleware Server GUID |
| `MobileUserCommServerName` |  | |  | `server_name` | `CHAR(100)` | Middleware Server Name |
| `MobileUserServerDomainName` |  | |  | `server_fqdn` | `CHAR(100)` | Server Fully Qualified Domain Name |
| `MobileUserServerTargetHost` |  | |  | `server_ip` | `CHAR(100)` | Name of target host in IP or host notation |
| `MblUsrCommServerSerialNumber` |  | |  | `serial_no` | `CHAR(50)` | Syclo Middleware Server Serial No. |
| `MobileUserApplication` |  | |  | `mobile_app` | `CHAR(30)` | Mobile Application Name |
| `MblUsrCommServerPortOnHost` |  | |  | `port` | `NUMC(5)` | Port of Host |
| `MblUsrCommServerIsLocked` |  | |  | `lock_flag` | `CHAR(1)` | Lock flag |
| `MblUsrOutboundTriggerIsDsbld` |  | |  | `disable_otrig` | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrOutbTriggerPortOnHost` |  | |  | `local_otrig_port` | `NUMC(5)` | Port of Host |
| `MblUsrOutboundTriggerURLType` |  | |  | `otrig_url_type` | `CHAR(1)` | Outbound Trigger URL Type |
| `MblUsrCommServerComponent` |  | |  | `sys_comp` | `CHAR(30)` | System Component |
| `MblUsrCloudPltfrmTenantInt` |  | |  | `tenant_id` | `CHAR(50)` | Cloud Platform Tenant Id |
| `MobileUserOrganizationInternal` |  | |  | `org_id` | `CHAR(50)` | Organization Id |
| `MblUsrCommServerLogicalDest` |  | |  | `rfcdest` | `CHAR(32)` | Logical destination (specified in function call) |
| `MblUsrCommServerConfigureURL` |  | |  | `config_url` | `CHAR(255)` | Configure UI URL |
| `MobileUserCommServerCreatedBy` |  | |  | `created_by` | `CHAR(12)` | Created by |
| `MblUsrCommServerCreatedDteTme` |  | |  | `created_ts` | `DEC(15)` | Creation timestamp |
| `MobileUserCommServerChangedBy` |  | |  | `changed_by` | `CHAR(12)` | Last Changed By |
| `MblUsrCommServerChangedDteTme` |  | |  | `changed_ts` | `DEC(15)` | Changed time stamp |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLCOMMSERVERDETAILS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLCOMMSERVERDETAILS')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL
}

@EndUserText.label: 'Mobile Application Middleware Server'
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}

@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'MobileUserSessionServer',
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #MASTER
  }
}
@VDM.viewType: #BASIC

define view entity I_MblCommServerDetails
  as select from /syclo/mdw05 as CommunicationServer
{
      @ObjectModel.text.element: [ 'MobileUserCommServerName' ]
  key server_guid      as MobileUserSessionServer,
      @Semantics.text: true
      server_name      as MobileUserCommServerName,
      server_fqdn      as MobileUserServerDomainName,
      server_ip        as MobileUserServerTargetHost,
      serial_no        as MblUsrCommServerSerialNumber,
      mobile_app       as MobileUserApplication,
      port             as MblUsrCommServerPortOnHost,
      lock_flag        as MblUsrCommServerIsLocked,
      disable_otrig    as MblUsrOutboundTriggerIsDsbld,
      local_otrig_port as MblUsrOutbTriggerPortOnHost,
      otrig_url_type   as MblUsrOutboundTriggerURLType,
      sys_comp         as MblUsrCommServerComponent,
      tenant_id        as MblUsrCloudPltfrmTenantInt,
      org_id           as MobileUserOrganizationInternal,
      rfcdest          as MblUsrCommServerLogicalDest,
      config_url       as MblUsrCommServerConfigureURL,
      created_by       as MobileUserCommServerCreatedBy,
      created_ts       as MblUsrCommServerCreatedDteTme,
      changed_by       as MobileUserCommServerChangedBy,
      changed_ts       as MblUsrCommServerChangedDteTme
}
```
