---
name: I_CASHFLOWDELTADATA
description: "Cashflowdeltadata"
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - component:FIN-FSCM-CLM-FQM-2CL
  - lob:Other
---
# I_CASHFLOWDELTADATA

**Cashflowdeltadata**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CashFlowID` | ✓ | |  | `flow_id` |  |  |
| `ValidFrom` | ✓ | |  | `valid_from` |  |  |
| `CompanyCode` |  | |  | `company_code` |  |  |
| `OriginSystem` |  | |  | `origin_system` |  |  |
| `OriginApplication` |  | |  | `origin_application` |  |  |
| `OriginDocument` |  | |  | `origin_document_id` |  |  |
| `OriginTransaction` |  | |  | `origin_transaction_id` |  |  |
| `OriginTransactionQualifier` |  | |  | `origin_trans_qualifier` |  |  |
| `CashFlow` |  | |  | `origin_flow_id` |  |  |

## Source Code

```abap
//////////////////////////////////////////////////////////////////////////////
// Documentation: This view does not implement the logic for valid cash flows
// but simply for purpose of replicating fqm_flow data without much calculation
//////////////////////////////////////////////////////////////////////////////
@Analytics.technicalName: 'ICASHFLWDEL'
@AbapCatalog.entityBuffer.definitionAllowed: false
@EndUserText.label: 'Delta Extraction Cash FLow' 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY

@Analytics:{
    dataCategory: #CUBE,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                  { 
                    table: 'FQM_FLOW',
                    role: #MAIN,
                    viewElement: ['CashFlowID', 'ValidFrom'],
                    tableElement: ['flow_id', 'valid_from']
                  }
                    ]
        }
    }
}

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel: { // representativeKey: 'CashFlowID',
                usageType.sizeCategory: #XXL,
                usageType.dataClass:  #TRANSACTIONAL,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                      //  #ANALYTICAL_DIMENSION, 
                                        #CDS_MODELING_ASSOCIATION_TARGET, 
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE],
                modelingPattern:  #ANALYTICAL_DIMENSION }
@ObjectModel.sapObjectNodeType.name: 'CashFlow'   
define view entity I_CashFlowDeltaData
    as select from fqm_flow as fqm_flow
{
 key  fqm_flow.flow_id                   as CashFlowID,
 key  fqm_flow.valid_from                as ValidFrom,
 
      fqm_flow.company_code              as CompanyCode,
      fqm_flow.origin_system             as OriginSystem,
      fqm_flow.origin_application        as OriginApplication,
      fqm_flow.origin_document_id        as OriginDocument,
      fqm_flow.origin_transaction_id     as OriginTransaction,
      fqm_flow.origin_trans_qualifier    as OriginTransactionQualifier,
      fqm_flow.origin_flow_id            as CashFlow
      
  }
```
