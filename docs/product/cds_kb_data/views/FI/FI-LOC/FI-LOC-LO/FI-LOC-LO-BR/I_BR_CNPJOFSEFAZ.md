---
name: I_BR_CNPJOFSEFAZ
description: "This CDS view provides you with a list of the tax authority (Sefaz) CNPJ for different regions. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_CNPJOFSEFAZ')/$value
semantic_en: "This CDS view provides you with a list of the tax authority (Sefaz) CNPJ for different regions. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Brazil CNPJ Of SEFAZ By Region — CDS view giao diện dựa trên logbr_sefaz_cnpj."
keywords:
  - "brazil"
  - "cnpj"
  - "sefaz"
  - "region"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_CNPJOFSEFAZ

**This CDS view provides you with a list of the tax authority (Sefaz) CNPJ for different regions. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_CNPJOFSEFAZ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Region` | ✓ | |  | `uf` | `CHAR(3)` | Region (State, Province, County) |
| `BR_CNPJ` |  | |  | `cast(case when cnpj > '99999999999999' then '00000000000000' else cnpj end as logbr_cnpj_numc )` | `NUMC(14)` | [DEPRECATED] CNPJ Numeric |
| `BR_CNPJ_2` |  | |  | `cast(cnpj as logbr_cnpj preserving type )` | `CHAR(14)` | National Registry of Legal Entities (CNPJ) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_CNPJOFSEFAZ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_CNPJOFSEFAZ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBRCNPJOFSEFAZ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Brazil CNPJ Of SEFAZ By Region'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_CNPJOfSEFAZ
   as select from logbr_sefaz_cnpj
   {
      key uf                                        as Region,
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: 'BR_CNPJ_2'
          @API.element.decommissioningPlannedForYearMonth: '2026-07'
          cast(case 
            when cnpj > '99999999999999' 
             then '00000000000000' 
            else cnpj end as logbr_cnpj_numc )      as BR_CNPJ,
          cast(cnpj as logbr_cnpj preserving type ) as BR_CNPJ_2
}
```
